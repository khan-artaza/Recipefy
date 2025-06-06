import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { recipeContext } from '../context/recipeContext';

const SingleRecipeInfo = () => {
  let params = useParams()
  console.log(params.id);

  let navigate = useNavigate()

  const {recipeData, setRecipeData} = useContext(recipeContext)

  
  let currRecipe = recipeData.filter((rec)=>rec.id == params.id)

  let ingr = currRecipe[0].ingredients.map((ingr)=>{
    return(
      <li className='marker:text-lime-500'>{ingr}</li>
    )
  })

  let dirc = currRecipe[0].instructions.map((dirc)=>{
    return(
      <li className='marker:text-lime-500'>{dirc}</li>
    )
  })

  function deleteHandler(){
    let filteredData = recipeData.filter((rec)=> rec.id != params.id)
    setRecipeData(filteredData)
    navigate("/recipes")
  }

  let conditionalButtons = currRecipe.map((r)=>{
    return(
      r.owner=="me" ?
      <>
      <Link to={`/create-recipe/details/${r.id}/update`}><button className='bg-lime-500 text-white px-2 py-2 rounded'>Update Recipe</button></Link>
      <button  onClick={deleteHandler} className=' bg-rose-500 text-white px-2 py-2 rounded'>Delete Recipe</button>
      </> : ""
      
    )
  })
  
  return (
    <div className='font-[Outfit] relative'>
      <img className='w-full z-10 aspect-square object-cover object-bootom' src={currRecipe[0].image} alt="" />

      
      <i onClick={()=>navigate(-1)} className="ri-arrow-left-line absolute z-40 font-semibold bg-lime-500 py-2 px-3 text-xl top-3 left-2 rounded-full"></i>
        


      <div className=' px-6 rounded-4xl pt-10 absolute w-full top-65 border-white z-20 bg-white'>
        <div className="top flex items-center justify-between w-full">
          <div className="name flex flex-col items-start">
            <h2 className='text-3xl font-semibold'>{currRecipe[0].title}</h2>
            <p className='text-lg opacity-65 font-medium'>{currRecipe[0].category}</p>
          </div>

          <div className='makingTime flex flex-col items-center gap-2 py-2 px-2 rounded-4xl justify-between bg-lime-400'>
          <i className="ri-time-line bg-white p-1 rounded-full px-2 font-medium text-2xl"></i>
          <p className='font-medium text-lg flex flex-col items-center justify-center'>{currRecipe[0].makingTime} <span className='text-sm '>mins</span></p>
          </div>
        </div>

        <div className="ingredients">
          <h2 className='text-xl font-semibold pt-4'>Ingredients</h2>
            <ul className='list-disc font-medium pl-8'>
              {ingr}
            </ul>
        </div>

        <div className="directions">
          <h2 className='text-xl font-semibold pt-4'>Directions</h2>
            <ul className='list-disc font-medium pl-8'>
              {dirc}
            </ul>
        </div>

    <div className="btn flex justify-between mt-5 pb-4">
      {conditionalButtons}
    </div>
      </div>
    </div>
  )
}

export default SingleRecipeInfo
