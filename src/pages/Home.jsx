import React from 'react'
import Navbar from './Navbar'
import Categorycomp from './Categorycomp'
import Foodcomp from './Foodcomp'
import { useState } from 'react'

const Home = () => {
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState({});
  return (
    <>
    <div  >
       <Navbar cart={cart} quantities={quantities} setQuantities={setQuantities} setCart={setCart} />
       <Categorycomp />
      <Foodcomp cart={cart} quantities={quantities} setQuantities={setQuantities} setCart={setCart} />
        
    </div>
    </>
  )
}

export default Home