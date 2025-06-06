import React, { useContext, useEffect, useState } from 'react'
import CategBubble from '../components/CategBubble'
import { recipeContext } from '../context/recipeContext'
import { Link, useNavigate } from 'react-router-dom'


  let categRecipe = ""
  let rendercategRecipes = ""

  
  const Recipe = () => {
    let navigate = useNavigate()
  let [active, setActive] = useState("")
  const {recipeData} = useContext(recipeContext)

  let [rendercategRecipes, setRenderCategRecipe] = useState("")

  let initailRender = recipeData.map((recp)=> {
    return (
      <Link className='w-[48%]' to={`/recipes/details/${recp.id}`}>
        <div className="recipeCard relative w-[100%]">
    <img className='w-full h-60 object-cover rounded-3xl'  src={recp.image} alt="" />
    <h3 className='text-xl font-semibold text-gray-800'>{recp.title}</h3>
    <p className='opacity-50 font-semibold'>{recp.category}</p>

    <div className='bg-gray-700 font-medium text-sm text-white w-fit px-2 rounded-2xl absolute top-4 left-4 opacity-70'>
      <i className="ri-time-line"></i> {recp.makingTime} min
      </div>
  </div>
      </Link>
    
  )
  })

  useEffect(()=>{

    setRenderCategRecipe(initailRender)
  },[])

  function myFilterData(categ){
    setActive(categ)
    categRecipe = recipeData.filter((recipe)=> recipe?.owner == categ)
    let tempRecpContainer = categRecipe.map((recp)=> {
      return (
        <Link className='w-[48%]' to={`/recipes/details/${recp.id}`}>
             <div className="recipeCard relative w-[100%]">
      <img className='w-full h-60 object-cover rounded-3xl'  src={recp.image} alt="" />
      <h3 className='text-xl font-semibold text-gray-800'>{recp.title}</h3>
      <p className='opacity-50 font-semibold'>{recp.category}</p>
  
      <div className='bg-gray-700 font-medium text-sm text-white w-fit px-2 rounded-2xl absolute top-4 left-4 opacity-70'>
        <i className="ri-time-line"></i> {recp.makingTime} min
        </div>
    </div>
        </Link>
     
    )
    })
 setRenderCategRecipe(tempRecpContainer)

  }



  function filterData(categ){
    setActive(categ)
    
    console.log(categ);    
    categRecipe = recipeData.filter((recipe)=> recipe.category == categ)
    console.log(categRecipe);
    
      let tempRecpContainer = categRecipe.map((recp)=> {
      return (
        <Link className='w-[48%]' to={`/recipes/details/${recp.id}`}>
           <div className="recipeCard relative w-[100%]">
      <img className='w-full h-60 object-cover rounded-3xl'  src={recp.image} alt="" />
      <h3 className='text-xl font-semibold text-gray-800'>{recp.title}</h3>
      <p className='opacity-50 font-semibold'>{recp.category}</p>
  
      <div className='bg-gray-700 font-medium text-sm text-white w-fit px-2 rounded-2xl absolute top-4 left-4 opacity-70'>
        <i className="ri-time-line"></i> {recp.makingTime} min
        </div>
    </div>
        </Link>
     
    )
    })
    setRenderCategRecipe(tempRecpContainer)

  }

  return (
    <div className='font-[Outfit] px-6 pt-4'>
      <div className='flex flex-col gap-4 w-full'>

      <h2 className='text-3xl font-medium'>Make your own food, <br />Stay at <span className='text-lime-600'>home</span> </h2>

      <div className='search flex mx-auto'>
        <div className='bg-gray-200 w-fit py-2 px-4 rounded-l-3xl'><i className="ri-search-line text-xl opacity-75"></i></div>
        <input className='bg-gray-200 py-2 px-4 rounded-r-3xl outline-none text-xl' type="text" placeholder='Search any recipe'/>
      </div>

      <div className="category flex gap-2 items-center justify-between flex-wrap  px-4">
        <button className={active=='western' ? "border-b-2 border-lime-500" : ""} onClick={()=>filterData("western") }><CategBubble title={"Western"} src={"images/pizza.png"}/></button>
        <button className={active=='drinks' ? " border-b-2 border-lime-500" : "" } onClick={()=>filterData("drinks")}><CategBubble title={"Drinks"} src={"images/tea-cup.png"}/></button>
        <button className={active=='local' ? " border-b-2 border-lime-500" : ""} onClick={()=>filterData("local")}><CategBubble title={"Local"} src={"images/chilli-pepper.png"}/></button>
        <button className={active=='dessert' ? " border-b-2 border-lime-500" : ""} onClick={()=>filterData("dessert")}><CategBubble title={"Dessert"} src={"images/ice-cream-cup.png"}/></button>
        <button className={active=='me' ? " border-b-2 border-lime-500" : ""} onClick={()=>myFilterData("me")}><CategBubble title={"My Recipe"} src={"images/user (1).png"}/></button>

      </div >
      <h2 className='text-3xl font-black'>Recipe</h2>
      <div className='flex flex-wrap w-full gap-3 justify-center items-start'>
      {rendercategRecipes}

      <p className='text-2xl w-1/2 font-semibold text-lime-700'>{rendercategRecipes=="" ? `You don't create any recipe yet!` : ""}</p>

      </div>

      </div>
    </div>
  )
}

export default Recipe
