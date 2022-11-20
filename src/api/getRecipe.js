import { corsSimpleRequests } from '../cors';

const axios = require('axios').default;

export const getRecipe = async () => {
    

const url = "https://www.allrecipes.com/recipe/229932/simple-pumpkin-pie/";
    const recipeUrl = 'https://tasty.p.rapidapi.com/recipes/auto-complete'
    const kosherUrl = 'https://www.kosher.com/recipe/5-minute-yummy-chicken-2701'

    
   

        
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
            params: {prefix: 'chicken soup'},
            headers: {
              'X-RapidAPI-Key': 'b11b26eb74mshc1689e69717c923p108c44jsn489151bf0397',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          };
          
          await axios.request(options).then(function (response) {
              console.log(response.data);
              //setRecipe(JSON.stringify(response.data.results[0].display))
              return JSON.stringify(response.data.results[0].display)
          }).catch(function (error) {
              console.error(error);
              return ''
          });



}

