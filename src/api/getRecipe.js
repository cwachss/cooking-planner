import { fakeRecipes } from './fakeRecipes';
const axios = require('axios').default;

export const categories = {
    sides: 'one_top_app_sides',
    appetizers: 'appetizers',
    veggies:'one_top_app_veggies',
    meat:'one_top_app_meat',
    chicken: 'frank_s_chicken_bites',
    dessert:'shoppable_recipes_desserts',
}

export const getRecipes = async (tag) => {
    const recipeUrl = 'https://tasty.p.rapidapi.com/recipes/list'
    const kosherUrl = 'https://www.kosher.com/recipe/5-minute-yummy-chicken-2701'

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: '1', tags: tag},
        headers: {
            'X-RapidAPI-Key': 'aa67783fdemsh44896d9ee36aa05p1453f2jsna0eec24ddb05',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
      
      const data = await axios.request(options).then(function (response) {
          console.log(response.data);
            return response.data
      }).catch(function (error) {
          console.error(error);
          return error
      });

   return data
}


export const getRecipe = async () => {
    //'under_30_minutes'
    const sides = await getRecipes(categories.sides)  
    const appetizers = await getRecipes(categories.appetizers) 
    const veggies = await getRecipes(categories.veggies) 
    const meat = await getRecipes(categories.meat) 
    const chicken = await getRecipes(categories.chicken) 
    const dessert = await getRecipes(categories.dessert) 

    const recipesData = [sides, appetizers, veggies, meat, chicken, dessert]  
    //const recipesData = fakeRecipes
    const recipe = recipesData.map((recipeData, index) => recipeData.results.map(fakeRecipe => {
        return {
            category: Object.keys(categories)[index],
            name: fakeRecipe.name,
            cookTime: fakeRecipe.cook_time_minutes,
            prepTime: fakeRecipe.prep_time_minutes,
            ingredients: fakeRecipe.sections.map(section => section.components.map(component => {
                return {
                    name: component.ingredient.name,
                    //amount: component.measurements[0].quantity + " " + component.measurements[0].unit.name,
                    amount: component.measurements.map(m => m.quantity + " " + m.unit.display_singular)[0],

                }
            }
            )).flat(1),
            instructions: fakeRecipe.instructions.map(instruction => {
                return {
                    position: instruction.position,
                    display_text: instruction.display_text
                }
            })

        }
    }))
    const fakeData = fakeRecipes
    return fakeData
}


