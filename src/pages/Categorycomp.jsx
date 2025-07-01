import React from 'react'
import Category from '../Components/Category'

const Categorycomp = () => {
  return (
    <div className="flex flex-row justify-evenly max-sm:grid max-sm:grid-cols-4 " >
        {Category.map((item) => (
            <div
  className="h-20 w-20 cursor-pointer max-sm:h-15 max-sm:w-15 bg-white mt-4 items-center flex flex-col p-4 hover:bg-orange-500 group transition-colors duration-200"
  key={item.id}>
  {item.image}
  <h3 className="text-orange-300 group-hover:text-white transition-colors duration-200">{item.name}</h3>
</div>
))}
    </div>
  )
}

export default Categorycomp