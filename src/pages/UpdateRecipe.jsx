import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { recipeContext } from '../context/MyRecipeContext';

const UpdateRecipe = () => {

  let params = useParams()
  console.log(params.id);

  let navigate = useNavigate()

  const {recipeData, setRecipeData} = useContext(recipeContext)

  
  let currRecipe = recipeData.find((rec)=>rec.id == params.id)

  console.log(currRecipe);
  
  const {
    register,
    handleSubmit,
    formState : {errors}
} = useForm(
  {
    defaultValues : {
      title : currRecipe.title,
      image : currRecipe.image,
      makingTime : currRecipe.makingTime,
      ingredients : currRecipe.ingredients,
      instructions : currRecipe.instructions,
      category : currRecipe.category
    }
  }
)

  function updateHandler(data){
    console.log(data);
    
    let index = recipeData.findIndex((r)=> params.id == r.id)
    let copyData = [...recipeData]
    copyData[index] = {...copyData[index], ...data}
    setRecipeData(copyData)
    navigate(-1)
  }

  return (
    <div>
       <form
        onSubmit={handleSubmit(updateHandler)}
         className='flex flex-col gap-1 px-8'>
            <input
            {...register("title" ,{required: "Recipe title should not be empty!"})}
             className='py-2 px-4 rounded bg-lime-100 font-semibold text-lime-800' type="text" placeholder='Recipe title'
             />
             <small className='text-rose-600 mx-auto'>{errors?.title?.message}</small>

            <input
            {...register("image",{required: "Image URL should not be empty!"})}
             className='py-2 px-4 rounded bg-lime-100 font-semibold text-lime-800' type="url" placeholder='Image URL' 
             />
             <small className='text-rose-600 mx-auto'>{errors?.image?.message}</small>
            <input
            {...register("makingTime",{required: "Making Time should not be empty!"})}
             className='py-2 px-4 rounded bg-lime-100 font-semibold text-lime-800' type="number" placeholder='Making Time in minutes' 
             />
             <small className='text-rose-600 mx-auto'>{errors?.makingTime?.message}</small>

            <textarea
            {...register("ingredients",{required: "Ingredients list should not be empty!"})}
             className='w-full h-30 py-2 px-4 rounded bg-lime-100 font-semibold text-lime-800' placeholder='Enter ingredients, separated by commas'
             />
             <small className='text-rose-600 mx-auto'>{errors?.ingredients?.message}</small>

            <textarea
            {...register("instructions",{required: "Instructions list should not be empty!"})}
             className='w-full h-30 py-2 px-4 rounded bg-lime-100 font-semibold text-lime-800' placeholder='Enter instructions, separated by commas'  
             />
              <small className='text-rose-600 mx-auto'>{errors?.instructions?.message}</small>

            <div className='flex justify-center items-center'>
            <label className='text-lg font-semibold text-lime-900' htmlFor="category">Select category : </label>
            <select
            {...register("category")}
             name="category" id="category" className='w-1/2  mx-auto py-2 px-4 rounded bg-lime-100 font-semibold text-lime-800'>
                <option value="western">Western</option>
                <option value="drinks">Drinks</option>
                <option value="local">Local</option>
                <option value="desserts">Desserts</option>
            </select>
            </div>

            <button className='bg-lime-500 text-white py-2 w-full text-2xl font-bold rounded mb-4'>Update</button>

        </form>
    </div>
  )
}

export default UpdateRecipe
