import React from 'react'
import AboutIntro from './about-intro.svg'
function Intro() {
  return (
    <>
      
    <div className='about-i h-screen'>
        
       

    </div>
    <div className="grid grid-cols-2  items-center min-h-screen ">
        <div className='z-10 flex justify-center'>
        <img src={AboutIntro} alt="" className='h-[500px] w-[500px]'/>
        </div>
        <div className='z-10 max-w-max flex flex-col space-y-5 sm:-mt-20'>
           <h1 className='text-5xl font-semibold text-white sm:text-5xl'>CLIVEGENCY</h1>
           <hr />
           <h1 className='text-xl text-white'>OLDER | STRONGER | WISER</h1>
        </div>
    </div>
    </>
  )
}

export default Intro