import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Recipe from '../pages/Recipe'
import Home from '../pages/Home'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipeInfo from '../pages/SingleRecipeInfo'
import UpdateRecipe from '../pages/UpdateRecipe'


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipe/>}/>
        <Route path='/recipes/details/:id' element={<SingleRecipeInfo/>}/>
        <Route path='/create-recipe' element={<CreateRecipe/>}/>
        <Route path='/create-recipe/details/:id/update' element={<UpdateRecipe/>}/>

      </Routes>
    </div>
  )
}

export default MainRoutes
