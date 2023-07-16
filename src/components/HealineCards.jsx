import React from 'react'

function HealineCards() {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 grid grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {/*Card */}
        <div className='relative rounded-xl'>
            {/** Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-4 pt-4'>Sun-s Out, BOGO's Out</p>
                <p className='px-4'>Through 8/20</p>
                <button className='border-white bg-white text-black absolute bottom-4  mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        <div className='relative rounded-xl'>
            {/** Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-4 pt-4'>Everythings you need</p>
                <p className='px-4'>We cook it for you !</p>
                <button className='border-white bg-white text-black absolute bottom-4  mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.pexels.com/photos/15029904/pexels-photo-15029904/free-photo-of-pain-nourriture-fast-food-des-hamburgers.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="/" />
        </div>
        <div className='relative rounded-xl'>
            {/** Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-4 pt-4'>New restaurant</p>
                <p className='px-4'>Added Daily</p>
                <button className='border-white bg-white text-black absolute bottom-4  mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="/" />
        </div>
        <div className='relative rounded-xl'>
            {/** Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-4 pt-4'>we delivred Desserts</p>
                <p className='px-4'>Evry day, evrey time</p>
                <button className='border-white bg-white text-black absolute bottom-4  mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="/" />
        </div>

    </div>
  )
}

export default HealineCards
