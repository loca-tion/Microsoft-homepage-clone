import React from 'react'

const card = () => {
  return (
    <div className='features-card p-4 w-full md:w-80 p-4'>
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Game-Pass-Ultimate-Characters-06102010-1?wid=297&hei=167&fit=crop' alt='NoImg' className='w-full'></img>
        <h1 className='text-3xl py-4'>Xbox Game Pass Ultimate</h1>
        <p className='text-xl py-2'>Xbox Live Gold and hundreds of high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
        <button className='hello text-xl text-blue-500 font-bold'>Join now</button>
    </div>
  )
}

export default card