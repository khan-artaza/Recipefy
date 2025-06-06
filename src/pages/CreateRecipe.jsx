import { useContext, useState } from 'react';
import {useForm} from 'react-hook-form'

import {nanoid} from 'nanoid'
import {useNavigate} from 'react-router-dom'
import { recipeContext } from '../context/MyRecipeContext';
import { toast } from 'react-toastify';

const CreateRecipe = () => {

    const{recipeData, setRecipeData} = useContext(recipeContext)


    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm()

   let navigate =  useNavigate()

    function submitHandler(data){
        console.log(data);

        

        let ingredArr = data.ingredients.split(",")
        let instrArr = data.instructions.split(",")

        data.ingredients = ingredArr
        data.instructions = instrArr
        data.id = nanoid(4)
        data.owner = "me"
        console.log("--->",data);

        let copyArr = [...recipeData]
        copyArr.push(data)
        
        setRecipeData(copyArr);
        console.log(copyArr);
        reset()
        toast.success("Your recipe created sucessfully!")
        navigate("/recipes")
    }

  return (
    <div>

        <div className='bg-lime-300 p-4 mt-4 relative'>
            <img className='w-full' src="images/cooking-ingredients-32089.svg" alt="" />
            <i onClick={()=>navigate(-1)} className="ri-arrow-left-line absolute z-40 font-semibold bg-lime-500 py-2 px-3 text-xl bottom-[-60px] left-2 rounded-full"></i>
        </div>

        <h2 className='w-[50%] mx-auto text-2xl text-center font-bold py-4 font-[Baskervville]'>Cook It <br /> Your Way!</h2>

        <form
        onSubmit={handleSubmit(submitHandler)}
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

            <button className='bg-lime-500 text-white py-2 w-full text-2xl font-bold rounded mb-4'>Submit</button>

        </form>
    </div>
  )
}

export default CreateRecipe
