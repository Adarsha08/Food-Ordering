import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from 'react-toastify'


const App = () => {
  return (
    <div className="bg-gray-600 h-full mr-5 ml-5 " >
      <Home />
      <ToastContainer/>
    </div>
  )
}

export default App
