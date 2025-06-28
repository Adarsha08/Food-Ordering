import React, { useState } from 'react';
import { GiCrossedBones } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ cart }) => {
  const [click, setclick] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center bg-orange-200 p-4 max-sm:bg-red-300">
        <button className="bg-orange-400 p-2 max-sm:w-10 max-sm:h-10 max-sm:text-sm max-sm:p-0 rounded-md">Login</button>
        <input type="text" placeholder="Search..." className="border-black p-2 w-96 bg-orange-50 max-sm:w-60 " />
        <div
          className="border-2 h-15 w-15"
          onClick={() => setclick(!click)}
        >
          <IoCartOutline className="h-8 w-8 cursor-pointer" />
        </div>
      </div>
      {click && (
        <div className="fixed top-0 right-0 h-full z-10 bg-white shadow-lg rounded-lg p-4 w-80 flex flex-col items-center">
          <h2 className="text-lg mt-8 font-semibold mb-2">Cart Items</h2>
          {cart.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul className="w-full">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b py-1">
                  <span>{item.food_name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex cursor-pointer justify-between items-center m-2 w-18 left-0 absolute top-0 p-4 bg-orange-400 rounded-b-lg">
            <button onClick={() => setclick(!click)}><GiCrossedBones /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;