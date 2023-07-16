import React, {useState} from 'react'
import {data} from '../data/data.js'
function Foods() {

    const [foods,setFoods] = useState(data);

    //filtrer/food
    const FilterType=(type)=>{
        setFoods(
            data.filter((item)=>{return item.category===type;})
        )
    }

    const FilterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{return item.price===price;})
        )
    }

    return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-3xl my-4 text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between text-sm'>

            <div className='flex '>
                {/** Type */}
                <p  className='font-bold my-2 text-gray-700'>Trier par Type:</p>
                <div >
                    <button onClick={()=>setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>All</button>
                    <button onClick={()=>FilterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>Burgers</button>
                    <button onClick={()=>FilterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>Pizza</button>
                    <button onClick={()=>FilterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>Salad</button>
                    <button onClick={()=>FilterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>Chickens</button>
                </div>
            </div>
                {/**Prix */}
            <div className='flex  justify-between max-w-[400px] w-full'>
                <p className='font-bold my-2 text-gray-700'>Trier par Prix :</p>
                <button onClick={()=>FilterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>$</button>
                <button onClick={()=>FilterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>$$</button>
                <button onClick={()=>FilterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>$$$</button>
                <button onClick={()=>FilterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white'>$$$$</button>
            </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-4'>
            {foods.map((food,index) =>(
                <div key={food.id} className='border shadow-lg rounded-lg hover:shadow-2xl duration-300 hover:scale-105'>
                    <img className='h-[250px] w-full object-cover rounded-t-lg' src={food.image} alt={food.name} />
                    <div className='flex justify-between px-2 py-4 rounded-b-lg'>
                        <p className='  flex flex-col'><span className='font-bold'>{food.name}</span>
                        <span className='text-xs text-slate-400 capitalize'>{food.category}</span>
                        </p>
                        <p>
                            <span className='bg-orange-600 text-white rounded-full px-2'>{food.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Foods
