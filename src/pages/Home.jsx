import React from 'react'
import Navbar from './Navbar'
import Categorycomp from './Categorycomp'
import Foodcomp from './Foodcomp'
import { useState } from 'react'

const Home = () => {
  const [cart, setCart] = useState([])
  return (
    <>
    <div >
       <Navbar cart={cart} setCart={setCart} />
       <Categorycomp />
      <Foodcomp cart={cart} setCart={setCart} />
        
    </div>
    </>
  )
}

export default Home