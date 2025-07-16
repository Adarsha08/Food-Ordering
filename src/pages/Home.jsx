import React, { useState } from 'react'
import Navbar from './Navbar'
import Categorycomp from './Categorycomp'
import Foodcomp from './Foodcomp'

const Home = () => {
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Navbar cart={cart} setCart={setCart} quantities={quantities} setQuantities={setQuantities} />
      <Categorycomp setSelectedCategory={setSelectedCategory} />
      <Foodcomp
        cart={cart}
        setCart={setCart}
        quantities={quantities}
        setQuantities={setQuantities}
        selectedCategory={selectedCategory}
      />
    </>
  )
}

export default Home