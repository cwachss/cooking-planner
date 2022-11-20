import { fakeRecipes } from './fakeRecipes';
const axios = require('axios').default;

export const categories = {
    appetizers: 'appetizers',
    chicken: 'frank_s_chicken_bites',
    meat:'one_top_app_meat',
    veggies:'one_top_app_veggies',
    sides: 'one_top_app_sides',
    dessert:'shoppable_recipes_desserts',
}

export const getRecipes = async (tag) => {
    const recipeUrl = 'https://tasty.p.rapidapi.com/recipes/list'
    const kosherUrl = 'https://www.kosher.com/recipe/5-minute-yummy-chicken-2701'

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: '20', tags: tag},
        headers: {
          'X-RapidAPI-Key': 'b11b26eb74mshc1689e69717c923p108c44jsn489151bf0397',
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
    
    const recipesData = await getRecipes(categories.meat)    
    //const recipesData = fakeRecipes
    const recipes = recipesData.results.map(fakeRecipe => {
        return {
            category: fakeRecipe.tags[0].name,
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
    })
    
    return recipes
}


