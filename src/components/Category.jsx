import React, { useState } from 'react'
import { categories } from '../data/data.js'

function Category() {
    const [cat,setCategories] = useState(categories);

  return (
    <div className='max-w-[1640px] mx-auto px-4 mb-20'>
        <h1 className='text-orange-600 py-6 text-4xl text-center font-bold'>Top rated Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 mb-8 gap-4'>
            {cat.map((category,index) =>(
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{category.name}</h2>
                    <img className='w-20' src={category.image} alt={category.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category
