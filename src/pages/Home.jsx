import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='px-6'>
        <img src="/images/homeVector.jpg" alt="ss" />
        <div className='flex flex-col gap-6'>
          <h2 className='w-[80%] text-7xl font-[Baskervville] font-bold tracking-tight leading-none text-[#1B2E35]'>It's Cooking Time</h2>
          <Link to={"/recipes"}><button className='bg-lime-500 w-fit rounded-3xl font-[Outfit] py-2 px-8 text-2xl text-white font-semibold'>Recipes</button></Link>
        </div>
    </div>
  )
}

export default Home
