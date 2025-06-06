import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex justify-between py-2 px-6 text-[#1B2E35] text-xl font-semibold font-[Outfit]'>
        <div className='flex gap-6'>
            <NavLink className={(e)=>e.isActive? "text-lime-600" : ""} to={"/"}>Home</NavLink>
            <NavLink className={(e)=>e.isActive? "text-lime-600" : ""} to={"/recipes"}>Recipes</NavLink>
        </div>
        <button className='bg-lime-600 text-white px-3 py-1 rounded-xl'>
      <NavLink className={(e)=>e.isActive? "text-black" : "" } to={"/create-recipe"}>Create <i class="ri-add-fill"></i></NavLink>
        </button>
    </div>
  )
}

export default Navbar