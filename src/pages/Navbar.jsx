import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-orange-200 p-4 max-sm:bg-red-300">
            <button className="bg-orange-400 p-2 max-sm:w-10 max-sm:h-10 max-sm:text-sm max-sm:p-0 rounded-md">Login</button>
            <input type="text"  placeholder="Search..." className="border-black p-2 w-96 bg-orange-50 max-sm:w-60 " />
            <button className="bg-orange-400 p-2 max-sm:w-10 max-sm:h-10 max-sm:text-sm max-sm:p-0  rounded-md">Login</button>
        </div>
    </div>
  )
}

export default Navbar