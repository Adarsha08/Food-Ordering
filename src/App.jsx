import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Foodcomp from "./pages/Foodcomp";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-gray-300 h-full">
      <Navbar cart={cart} />
      <Foodcomp cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
