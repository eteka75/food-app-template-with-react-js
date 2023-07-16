import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto px-4'>
        <div className='max-h-[400px] relative'>
            <div className='absolute w-full h-full flex flex-col text-gray-200 justify-center max-h-[400px] bg-black/40  '>
                <h1 className='font-bold px-4 text-4xl ms:text5xl md:text-6xl lg:text7xl' >The <span className='text-orange-500'>Best</span></h1>
                <h1 className='font-bold px-4 text-4xl ms:text5xl md:text-6xl lg:text7xl' ><span className='text-orange-500'>Food</span> Delivered</h1>
            </div>
        <img className='w-full h-full max-h-[400px] object-cover' src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </div>
  )
}

export default Hero
