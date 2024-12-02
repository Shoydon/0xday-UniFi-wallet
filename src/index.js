import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import keys from './key.json'
const OKTO_CLIENT_API_KEY = keys.OKTO_CLIENT_API_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </OktoProvider>

);
