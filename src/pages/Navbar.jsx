import React, { useState } from 'react';
import { GiCrossedBones } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Navbar = ({ cart, setCart, quantities, setQuantities }) => {
  const [click, setclick] = useState(false);

  const changequantity = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setQuantities({ ...quantities, [id]: value });

    // Update the cart's item quantity as well
    cart.forEach(item => {
      if (item.id.toString() === id.toString()) {
        item.quantity = value;
      }
    });
  };

  const deleteid = (id) => {
    // Remove the item from the cart
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    // // Optionally clear the quantity
    // setQuantities({ ...quantities, [id]: "" });
    console.log("Delete button clicked for item with id:", id);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-black border-b-white border-b-2 p-4 max-sm:bg-red-300">
        <button className="bg-red-600 ml-10 p-2 max-sm:w-10 max-sm:h-10 max-sm:text-sm max-sm:p-0 rounded-md">
          Login
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="border-black p-2 w-96 bg-orange-50 max-sm:w-60"
        />
        <div
          className="border-2 border-black rounded-md bg-red-600 mr-10 h-11 w-11 flex items-center justify-center"
          onClick={() => setclick(!click)}
        >
          <IoCartOutline className="h-8 w-8 cursor-pointer" />
        </div>
      </div>
      {click && (
        <div className="fixed top-0 right-0 h-full z-10 bg-gray-300 shadow-lg rounded-lg p-4 w-96 flex flex-col items-center">
          <h2 className="text-lg mt-8 font-semibold mb-2">Cart Items</h2>
          {cart.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul className="w-full flex flex-col justify-evenly">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b py-1 items-center">
                  <span>{item.food_name}</span>
                  <input
                    className="w-10"
                    type="number"
                    id={item.id}
                    name="quantity"
                    min="1"
                    value={quantities[item.id] || item.quantity || 1}
                    onChange={changequantity}
                  />
                  <span>Qty: {item.quantity || quantities[item.id] || 1}</span>
                  <span>₹{item.price}</span>
                  <button
                    onClick={() => deleteid(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <MdDelete className="w-7 h-7" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div
            onClick={() => setclick(!click)}
            className="flex cursor-pointer justify-between items-center m-2 w-18 left-0 absolute top-0 p-4 bg-orange-400 rounded-b-lg"
          >
            <button onClick={() => setclick(!click)}>
              <GiCrossedBones />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

