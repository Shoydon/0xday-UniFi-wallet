import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import { useEffect, useMemo, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useOkto } from 'okto-sdk-react';
import { ethers } from 'ethers';
import keys from './key.json'
// import { useSession } from "next-auth/react";
// import { SessionProvider } from "./context/SessionContext";
// import App from './App.tsx';

function App() {

  // const { session, idToken, login, logout } = useSession();
  // useEffect(() => {
  //   if (session) {
  //     console.log("User is logged in:", session);
  //   }
  // }, [session]);

  const [account, setAccount] = useState(null)
  const [connected, setConnected] = useState(false)
  const { showWidgetModal, closeModal, authenticate, isLoggedin, logout  } = useOkto()
  // console.log(useOkto());
  // console.log(logout);
  

  // const idToken = useMemo(() => (session ? session.id_token : null), [session]);
  const idToken = keys.ID_TOKEN

  const handleConnect = async () => {
    console.log(window.ethereum);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);

    const loadProvider = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setConnected(true)
        handleAuthenticate()
      } else {
        console.error("Metamask is not installed");
      }
    }
    provider && loadProvider();
  }

  const handleAuthenticate = async () => {
    if (!idToken) {
      return { result: false, error: "No google login" };
    }
    return new Promise((resolve) => {
      authenticate(idToken, (result, error) => {
        if (result) {
          console.log("Authentication successful");
          resolve({ result: true });
        } else if (error) {
          console.error("Authentication error:", error);
          resolve({ result: false, error });
        }
      });
    });
  }

  const handleDisonnect = () => {
    setAccount(null)
    setConnected(false)
    closeModal()
    // logout().then(result => console.log("logged out"));
  }


  return (
    // <SessionProvider>
      <BrowserRouter>
        <ToastContainer />
        <div className="App min-h-screen">
          <div className='gradient-bg-welcome h-screen w-screen'>
            {/* <Nav /> */}
            <Nav account={account} handleConnect={handleConnect} handleDisonnect={handleDisonnect} connected={connected} />
            <Routes>
              {/* <Route path="/" element={<Home phone={phone} setPhone={setPhone} />}></Route> */}
              <Route path="/" element={<Home handleConnect={handleConnect} handleDisonnect={handleDisonnect} showModal={showWidgetModal} connected={connected} />}></Route>

            </Routes>
          </div>
        </div>

      </BrowserRouter>
    // </SessionProvider>
    // <App/>
  );
}

export default App;
