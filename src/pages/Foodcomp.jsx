import React from 'react'
import Food from './Food'

const Foodcomp = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {Food.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg cursor-pointer p-4 w-64 transform transition-transform duration-200 hover:scale-105"
            >
              <img src={item.food_image} alt={item.food_name} className="w-full h-40 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-2">{item.food_name}</h2>
              <p className="text-gray-600">{item.food_category}</p>
              <p className="text-green-600 font-bold mt-1">₹{item.price}</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Foodcomp