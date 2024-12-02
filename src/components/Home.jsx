import React from 'react'

function Home({ connected, showModal }) {

  return (
    <div className='text-white flex justify-around items-center pt-32'>
      {connected && (
        <>
        {showModal()}
        </> 
      )}
    </div>
  )
}

export default Home