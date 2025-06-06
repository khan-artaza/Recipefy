import React, { createContext, useEffect, useState } from 'react'

export const recipeContext = createContext(null)

const MyRecipeContext = (props) => {

  let defaultRecipe = [
    
    // --- WESTERN RECIPES ---
{
"id": 1,
"title": "Grilled Chicken Sandwich",
"category": "western",
"makingTime": 20,
"ingredients": [
 "1 Chicken breast",
 "2 Bread slices",
 "2 Lettuce leaves",
 "2 Tomato slices",
 "1 tbsp Mayonnaise",
 "1 Cheese slice"
],
"instructions": [
 "Season and grill the chicken breast until fully cooked.",
 "Toast the bread slices lightly.",
 "Spread mayonnaise on one side of each bread slice.",
 "Layer lettuce, tomato, grilled chicken, and cheese on one slice.",
 "Cover with the other bread slice and cut in half to serve."
],
"image": "https://easychickenrecipes.com/wp-content/uploads/2023/06/grilled-chicken-sandwich-1-of-6-edited.jpg"
},
{
"id": 2,
"title": "Spaghetti Aglio e Olio",
"category": "western",
"makingTime": 15,
"ingredients": [
 "200g Spaghetti",
 "4 Garlic cloves",
 "3 tbsp Olive oil",
 "Red chili flakes",
 "Salt",
 "Parsley"
],
"instructions": [
 "Boil spaghetti until al dente.",
 "In a pan, heat olive oil and sauté sliced garlic until golden.",
 "Add red chili flakes and cooked pasta.",
 "Toss well and garnish with chopped parsley."
],
"image": "https://www.themediterraneandish.com/wp-content/uploads/2023/10/aglio-e-olio-recipe-2023-7.jpg"
},
{
"id": 3,
"title": "Veggie Wrap",
"category": "western",
"makingTime": 10,
"ingredients": [
 "Tortilla wraps",
 "Chopped veggies (bell pepper, cucumber, tomato)",
 "Lettuce",
 "Hummus or mayonnaise"
],
"instructions": [
 "Lay tortilla flat and spread hummus.",
 "Add chopped veggies and lettuce.",
 "Roll tightly and slice in half to serve."
],
"image": "https://www.eatingwell.com/thmb/BKZhWx-_Xyo6MKrh3s_gi10DQ8w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4526733-45129f82ed554ea1be3ac980d096a6f1.jpg"
},
{
"id": 4,
"title": "Cheese Omelette",
"category": "western",
"makingTime": 10,
"ingredients": [
 "2 Eggs",
 "1/4 cup Cheese",
 "Salt and pepper",
 "Butter"
],
"instructions": [
 "Beat eggs with salt and pepper.",
 "Heat butter in a pan and pour egg mixture.",
 "Once half-cooked, add cheese in the center.",
 "Fold the omelette and cook till cheese melts."
],
"image": "https://www.emborg.com/app/uploads/2023/07/1200x900px_Easy_Cheese_Omelette.png"
},
{
"id": 5,
"title": "French Fries",
"category": "western",
"makingTime": 25,
"ingredients": [
 "2 Potatoes",
 "Salt",
 "Oil for frying"
],
"instructions": [
 "Peel and cut potatoes into thin sticks.",
 "Soak in water for 15 mins, then pat dry.",
 "Deep fry until golden and crisp.",
 "Sprinkle salt and serve hot."
],
"image": "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800"
},

// --- DRINKS RECIPES ---
{
"id": 6,
"title": "Mango Smoothie",
"category": "drinks",
"makingTime": 10,
"ingredients": [
 "1 cup Mango pulp",
 "1 cup Milk",
 "2 tsp Sugar",
 "Ice cubes"
],
"instructions": [
 "Add all ingredients to a blender.",
 "Blend until smooth.",
 "Serve chilled in a glass."
],
"image": "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-2.jpg"
},
{
"id": 7,
"title": "Lemon Mint Cooler",
"category": "drinks",
"makingTime": 5,
"ingredients": [
 "Lemon juice",
 "Mint leaves",
 "Sugar",
 "Cold water",
 "Ice cubes"
],
"instructions": [
 "Muddle mint leaves and sugar.",
 "Add lemon juice and cold water.",
 "Stir well and add ice cubes.",
 "Serve immediately."
],
"image": "https://chefkraft.com/wp-content/uploads/2021/08/Frosty-lemon-mint-1.jpg"
},
{
"id": 8,
"title": "Cold Coffee",
"category": "drinks",
"makingTime": 5,
"ingredients": [
 "1 tbsp Instant coffee",
 "1 cup Milk",
 "2 tsp Sugar",
 "Ice cubes"
],
"instructions": [
 "Blend all ingredients until frothy.",
 "Pour into a tall glass.",
 "Serve cold."
],
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDsqgAbAe8PW6jDzstosUPkPu7x5OYofNeQ&s"
},
{
"id": 9,
"title": "Banana Shake",
"category": "drinks",
"makingTime": 5,
"ingredients": [
 "1 Banana",
 "1 cup Milk",
 "1 tsp Honey",
 "Ice cubes"
],
"instructions": [
 "Blend banana, milk, and honey.",
 "Add ice cubes and blend again.",
 "Serve chilled."
],
"image": "https://t3.ftcdn.net/jpg/06/80/29/28/360_F_680292854_LErIPEtJpJSuog1MIER8zk8KAD1VHsoD.jpg"
},
{
"id": 10,
"title": "Masala Chai",
"category": "drinks",
"makingTime": 15,
"ingredients": [
 "1 cup Water",
 "1/2 cup Milk",
 "1 tsp Tea leaves",
 "Spices (ginger, cardamom, cloves)",
 "Sugar"
],
"instructions": [
 "Boil water with spices.",
 "Add tea leaves and let it simmer.",
 "Pour milk and boil for a few minutes.",
 "Strain and serve hot with sugar."
],
"image": "https://foodandroad.com/wp-content/uploads/2021/04/masala-chai-indian-drink-3-500x500.jpg"
},

// --- LOCAL RECIPES ---
{
"id": 11,
"title": "Paneer Butter Masala",
"category": "local",
"makingTime": 30,
"ingredients": [
 "200g Paneer",
 "1 cup Tomato puree",
 "Cream",
 "Butter",
 "Spices"
],
"instructions": [
 "Sauté tomato puree with spices in butter.",
 "Add paneer cubes and cook.",
 "Add cream and simmer.",
 "Serve hot with naan."
],
"image": "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-1.jpg"
},
{
"id": 12,
"title": "Aloo Paratha",
"category": "local",
"makingTime": 25,
"ingredients": [
 "Wheat dough",
 "Boiled potatoes",
 "Spices",
 "Butter"
],
"instructions": [
 "Mash potatoes with spices.",
 "Stuff into dough balls and roll flat.",
 "Cook on tawa with butter until golden.",
 "Serve hot with curd or pickle."
],
"image": "https://pipingpotcurry.com/wp-content/uploads/2022/11/Aloo-Paratha-Best-Recipe-Piping-Pot-Curry.jpg"
},
{
"id": 13,
"title": "Chole Bhature",
"category": "local",
"makingTime": 45,
"ingredients": [
 "Chickpeas",
 "Onion tomato gravy",
 "Flour for bhature",
 "Spices"
],
"instructions": [
 "Cook chickpeas with onion-tomato masala.",
 "Make dough and roll into bhature.",
 "Deep fry bhature until fluffy.",
 "Serve together with salad."
],
"image": "https://static.toiimg.com/thumb/53314156.cms?imgsize=1762111&width=800&height=800"
},
{
"id": 14,
"title": "Poha",
"category": "local",
"makingTime": 15,
"ingredients": [
 "Flattened rice (poha)",
 "Onion",
 "Mustard seeds",
 "Curry leaves",
 "Turmeric"
],
"instructions": [
 "Soak poha and drain.",
 "Sauté mustard seeds, onion, and curry leaves.",
 "Add turmeric and poha, mix well.",
 "Serve with lemon and sev."
],
"image": "https://vegecravings.com/wp-content/uploads/2016/12/Aloo-Poha-Recipe-Step-By-Step-Instructions-scaled.jpg.webp"
},
{
"id": 15,
"title": "Rajma Chawal",
"category": "local",
"makingTime": 40,
"ingredients": [
 "Kidney beans",
 "Rice",
 "Onion tomato gravy",
 "Spices"
],
"instructions": [
 "Boil kidney beans until soft.",
 "Cook with onion-tomato masala and spices.",
 "Serve hot with plain rice."
],
"image": "https://b.zmtcdn.com/data/pictures/chains/6/19772266/d05e637d6a6abd142e8a69cf24d563c1.jpg?fit=around|960:500&crop=960:500;*,*"
},

// --- DESSERTS RECIPES ---
{
"id": 16,
"title": "Gulab Jamun",
"category": "dessert",
"makingTime": 45,
"ingredients": [
 "Khoya",
 "Flour",
 "Sugar",
 "Cardamom",
 "Ghee"
],
"instructions": [
 "Make dough from khoya and flour.",
 "Roll into balls and deep fry.",
 "Soak in sugar syrup.",
 "Serve warm or cold."
],
"image": "https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=1100"
},
{
"id": 17,
"title": "Kheer",
"category": "dessert",
"makingTime": 30,
"ingredients": [
 "Milk",
 "Rice",
 "Sugar",
 "Cardamom",
 "Dry fruits"
],
"instructions": [
 "Boil milk and add soaked rice.",
 "Simmer until rice is cooked.",
 "Add sugar and cardamom.",
 "Garnish with dry fruits."
],
"image": "https://shivanilovesfood.com/wp-content/uploads/2024/01/Creamy-Kheer-4.jpg"
},
{
"id": 18,
"title": "Rasgulla",
"category": "dessert",
"makingTime": 40,
"ingredients": [
 "Chenna (paneer)",
 "Sugar syrup",
 "Cardamom"
],
"instructions": [
 "Make soft chenna balls.",
 "Boil in sugar syrup until double in size.",
 "Cool and serve with syrup."
],
"image": "https://shreelaxmisweets.in/wp-content/uploads/2023/06/rasgulla-back.jpg"
},
{
"id": 19,
"title": "Chocolate Mug Cake",
"category": "dessert",
"makingTime": 5,
"ingredients": [
 "Flour",
 "Cocoa powder",
 "Sugar",
 "Milk",
 "Baking powder"
],
"instructions": [
 "Mix all ingredients in a mug.",
 "Microwave for 1-2 minutes.",
 "Serve warm with ice cream."
],
"image": "https://tastesbetterfromscratch.com/wp-content/uploads/2022/12/Chocolate-Mug-Cake-1.jpg"
},
{
"id": 20,
"title": "Fruit Custard",
"category": "dessert",
"makingTime": 20,
"ingredients": [
 "Milk",
 "Custard powder",
 "Sugar",
 "Chopped fruits"
],
"instructions": [
 "Boil milk and add custard mix.",
 "Cook until thick.",
 "Cool and add fruits.",
 "Refrigerate and serve chilled."
],
"image": "https://i0.wp.com/delishbite.in/wp-content/uploads/2023/03/Blog_3-1.jpg?resize=768%2C768&ssl=1"
}

]

let [recipeData, setRecipeData] = useState(()=>{
      let localData = localStorage.getItem("recipeData")
      return (localData && localData !== "undefined")? JSON.parse(localData) : defaultRecipe
    }
      )

  useEffect(()=>{
    localStorage.setItem("recipeData",JSON.stringify(recipeData))
  },[recipeData])
        


  return (
    <div>
        <recipeContext.Provider value={{recipeData, setRecipeData}}>
      {props.children}
        </recipeContext.Provider>
    </div>
  )
}

export default MyRecipeContext
