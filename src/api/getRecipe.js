import { corsSimpleRequests } from '../cors';

const axios = require('axios').default;

export const getRecipe = async () => {
        
    const options = {
        method: 'GET',
        url: 'https://api.edamam.com/api/recipes/v2',
        params: {app_id: '7da57a27',
        app_key: '7fdd3f94fc77d889a65e32d26c82bb1d',
        random: true
    },
        headers: {
          'content-type': 'Application/json'
        }
      };
      
      const resp = await axios.request(options).then(function (response) {
          console.log(response.data);
          //setRecipe(JSON.stringify(response.data.results[0].display))
          //return JSON.stringify(response.data.results[0].display)

      }).catch(function (error) {
        //return ''
          console.error(error);
      });

      const fakeData = {
        result: {
            name: "Chicken Soup",
            prepTime: "30 minutes",
            cookTime: 90,
            ingredients: [
                {
                    name: "chicken thighs",
                    amount: "4"
                },
                {
                    name: "rosemary",
                    amount: "4 tsp"
                },
                {
                    name: "Olive Oil",
                    amount: "2 tbsp"
                }
            ],
            instructions: [
                {
                    text: "do this one"
                },
                {
                    text: "do that two"
                },
                {
                    text: "do three"
                },
                {
                    text: "do four"
                },
            ]
        }
      }

      
   
      return fakeData
}


