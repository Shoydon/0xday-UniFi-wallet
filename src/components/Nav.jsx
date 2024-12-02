import React from 'react'
import { Link } from 'react-router-dom'

// function Nav() {
function Nav({ account, handleConnect, handleDisonnect, connected }) {
  return (
    <>
      <div class="fixed z-10 backdrop-blur-sm">
        <section class="relative mx-auto">

          <nav class="flex justify-between text-white w-screen px-24">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading">
                Uni-Fi Wallet
              </a>

              <ul class="md:flex px-4 mx-auto font-semibold font-heading space-x-7">
                <Link className='no-underline text-gray-200' as={Link} to="/">
                  <li>Home</li>
                </Link>
              </ul>

              <div class="flex items-center space-x-5">
                  {connected ? (
                      <button onClick={handleDisonnect} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Disconnect
                      </button>
                  ) : (
                    <button onClick={handleConnect} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      Connect metamask
                    </button>
                    )}
              </div>
            </div>


          </nav>

        </section>
      </div>


    </>
  )
}

export default Nav