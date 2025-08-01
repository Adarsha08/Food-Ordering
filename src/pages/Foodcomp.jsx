import React, { useState } from 'react'
import Food from '../Components/Food'
import { toast } from 'react-toastify';

const Foodcomp = ({ cart, setCart, quantities, setQuantities, selectedCategory }) => {
  const filteredFood =
  !selectedCategory || selectedCategory === "All"
    ? Food
    : Food.filter(item => item.food_category === selectedCategory);

  const addtocart = (item) => {
    const quantity = quantities[item.id] || 1;
    setCart([...cart, { ...item, quantity }]);
    setQuantities({ ...quantities, [item.id]: "" });
    toast.success("Item added", { autoClose: 100 });
  };

  const addquantity = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };
 

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredFood.length === 0 ? (
          <p className="text-center w-full text-lg text-gray-700">No food found for this category.</p>
        ) : (
          filteredFood.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg cursor-pointer p-4 w-64 transform transition-transform duration-200 hover:scale-105"
            >
              <img src={item.food_image} alt={item.food_name} className="w-full h-40 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-2">{item.food_name}</h2>
              <p className="text-gray-600">{item.food_category}</p>
              <p className="text-green-600 font-bold mt-1">₹{item.price}</p>
              <label htmlFor={`quantity-${item.id}`}>Add Quantity:
                <input
                  className="border-2 w-20 ml-5 pl-2 border-black"
                  type="number"
                  id={`quantity-${item.id}`}
                  name="quantity"
                  min="1"
                  value={quantities[item.id] || ""}
                  onChange={e => addquantity(item.id, e.target.value)}
                />
              </label>
              <div className="flex justify-center">
                <button
                  className="mt-3 bg-blue-500 text-white px-4 py-2 w-44 rounded hover:bg-blue-600"
                  onClick={() => addtocart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Foodcomp;