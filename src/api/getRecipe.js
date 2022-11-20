const axios = require('axios').default;
//const cheerio = require('cheerio');

export const getRecipes = async () => {
    const recipeUrl = 'https://tasty.p.rapidapi.com/recipes/list'
    const kosherUrl = 'https://www.kosher.com/recipe/5-minute-yummy-chicken-2701'

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: '20', tags: 'under_30_minutes'},
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
      

      const fakeData = {
        result: {
            catagory: "main",
            name: "Chicken Soup",
            prepTime: "30 minutes",
            cookTime: "1 hour 30 minutes",
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

      
   return data
      //return fakeData
}

export const getRecipe = async () => {
    //const recipesData = await getRecipes()
    //const recipes = recipesData.results //array of recipes
    const fakeRecipe = {
        "servings_noun_singular": "stacker",
        "draft_status": "published",
        "seo_title": "",
        "promotion": "full",
        "nutrition_visibility": "auto",
        "country": "US",
        "slug": "ricotta-and-cranberry-pretzel-snaps-stackers",
        "credits": [
          {
            "id": 120,
            "type": "brand",
            "slug": "snyders-of-hanover-r",
            "image_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/520db462496a40c7acf82656c1b217c9.jpeg",
            "name": "Snyder’s of Hanover®"
          }
        ],
        "approved_at": 1668710203,
        "beauty_url": null,
        "is_shoppable": true,
        "canonical_id": "recipe:8545",
        "instructions": [
          {
            "position": 1,
            "display_text": "Make the cranberry sauce: In a medium saucepan, combine the cranberries, orange juice, sugar, orange peel, and cinnamon stick. Bring to a boil over medium-high heat, then reduce the heat to medium-low and simmer uncovered for 12–15 minutes, until the cranberries have burst and the liquid has reduced by half. Remove the pot from the heat and let the sauce cool to room temperature, then discard the cinnamon stick and orange peel. Any cranberry sauce left over after assembly will keep in an airtight container in the refrigerator for up to 4 days. (If using store-bought cranberry sauce, skip this step.)",
            "start_time": 11666,
            "appliance": null,
            "end_time": 18333,
            "temperature": null,
            "id": 73830
          },
          {
            "start_time": 22371,
            "appliance": null,
            "end_time": 33366,
            "temperature": null,
            "id": 73831,
            "position": 2,
            "display_text": "Assemble the pretzel stack: spread ½ teaspoon of ricotta on one side of a Snyder’s of Hanover® Pretzel Snap and stack another pretzel on top, positioning the second pretzel 45° from the first, so as to cover the holes. Scoop another 1 teaspoon of ricotta onto the pretzel stack and, using the back of the teaspoon, make a divot in the center of the ricotta. Spoon 1 teaspoon of cranberry sauce into the divot. Repeat to make the remaining pretzel stackers."
          },
          {
            "start_time": 35000,
            "appliance": null,
            "end_time": 37333,
            "temperature": null,
            "id": 73832,
            "position": 3,
            "display_text": "Garnish each stacker with an optional small sprig of rosemary and a sprinkle of orange zest."
          },
          {
            "appliance": null,
            "end_time": 42000,
            "temperature": null,
            "id": 73833,
            "position": 4,
            "display_text": "Enjoy!",
            "start_time": 41000
          }
        ],
        "compilations": [],
        "show": {
          "name": "Tasty",
          "id": 17
        },
        "servings_noun_plural": "stackers",
        "video_ad_content": "co_branded",
        "cook_time_minutes": 15,
        "tags": [
          {
            "name": "appetizers",
            "id": 64481,
            "display_name": "Appetizers",
            "type": "meal"
          },
          {
            "id": 64508,
            "display_name": "Fall",
            "type": "seasonal",
            "name": "fall"
          },
          {
            "id": 64504,
            "display_name": "BBQ",
            "type": "occasion",
            "name": "bbq"
          },
          {
            "type": "occasion",
            "name": "casual_party",
            "id": 64503,
            "display_name": "Casual Party"
          },
          {
            "name": "under_30_minutes",
            "id": 64472,
            "display_name": "Under 30 Minutes",
            "type": "difficulty"
          },
          {
            "name": "snacks",
            "id": 64491,
            "display_name": "Snacks",
            "type": "meal"
          },
          {
            "name": "thanksgiving",
            "id": 64479,
            "display_name": "Thanksgiving",
            "type": "holiday"
          },
          {
            "name": "christmas",
            "id": 64473,
            "display_name": "Christmas",
            "type": "holiday"
          },
          {
            "display_name": "American",
            "type": "cuisine",
            "name": "american",
            "id": 64444
          },
          {
            "name": "stove_top",
            "id": 65848,
            "display_name": "Stove Top",
            "type": "appliance"
          },
          {
            "id": 64511,
            "display_name": "Winter",
            "type": "seasonal",
            "name": "winter"
          },
          {
            "name": "under_45_minutes",
            "id": 8091747,
            "display_name": "Under 45 Minutes",
            "type": "difficulty"
          },
          {
            "name": "under_1_hour",
            "id": 8091748,
            "display_name": "Under 1 Hour",
            "type": "difficulty"
          },
          {
            "id": 64469,
            "display_name": "Vegetarian",
            "type": "dietary",
            "name": "vegetarian"
          }
        ],
        "nutrition": {},
        "inspired_by_url": null,
        "name": "Ricotta And Cranberry Pretzel Snaps Stackers",
        "aspect_ratio": "9:16",
        "thumbnail_alt_text": "",
        "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/43a118acac584c829b4091d81cb0d0ca/Snyders_BFV96957_RicottaCranberryPretzelSnapsStackers_TikTok.mp4",
        "video_id": 172068,
        "id": 8545,
        "sections": [
          {
            "components": [
              {
                "raw_text": "n/a",
                "extra_comment": "",
                "ingredient": {
                  "updated_at": 1538679692,
                  "name": "fresh cranberries",
                  "created_at": 1538679692,
                  "display_plural": "fresh cranberries",
                  "id": 4781,
                  "display_singular": "fresh cranberry"
                },
                "id": 97891,
                "position": 2,
                "measurements": [
                  {
                    "unit": {
                      "abbreviation": "oz",
                      "system": "imperial",
                      "name": "ounce",
                      "display_plural": "oz",
                      "display_singular": "oz"
                    },
                    "quantity": "12",
                    "id": 714729
                  }
                ]
              },
              {
                "position": 3,
                "measurements": [
                  {
                    "unit": {
                      "name": "milliliter",
                      "display_plural": "mL",
                      "display_singular": "mL",
                      "abbreviation": "mL",
                      "system": "metric"
                    },
                    "quantity": "180",
                    "id": 714737
                  },
                  {
                    "id": 714735,
                    "unit": {
                      "system": "imperial",
                      "name": "cup",
                      "display_plural": "cups",
                      "display_singular": "cup",
                      "abbreviation": "c"
                    },
                    "quantity": "¾"
                  }
                ],
                "raw_text": "3⁄4 cup orange juice",
                "extra_comment": "",
                "ingredient": {
                  "created_at": 1495141563,
                  "display_plural": "orange juices",
                  "id": 485,
                  "display_singular": "orange juice",
                  "updated_at": 1509035256,
                  "name": "orange juice"
                },
                "id": 97859
              },
              {
                "extra_comment": "",
                "ingredient": {
                  "id": 24,
                  "display_singular": "sugar",
                  "updated_at": 1509035288,
                  "name": "sugar",
                  "created_at": 1493314650,
                  "display_plural": "sugars"
                },
                "id": 97860,
                "position": 4,
                "measurements": [
                  {
                    "id": 714736,
                    "unit": {
                      "system": "metric",
                      "name": "gram",
                      "display_plural": "g",
                      "display_singular": "g",
                      "abbreviation": "g"
                    },
                    "quantity": "150"
                  },
                  {
                    "id": 714734,
                    "unit": {
                      "display_singular": "cup",
                      "abbreviation": "c",
                      "system": "imperial",
                      "name": "cup",
                      "display_plural": "cups"
                    },
                    "quantity": "¾"
                  }
                ],
                "raw_text": "3⁄4 cup sugar"
              },
              {
                "id": 97861,
                "position": 5,
                "measurements": [
                  {
                    "unit": {
                      "display_plural": "",
                      "display_singular": "",
                      "abbreviation": "",
                      "system": "none",
                      "name": ""
                    },
                    "quantity": "1",
                    "id": 714733
                  }
                ],
                "raw_text": "1 2-inch orange peel",
                "extra_comment": "2-inch (5-cm)",
                "ingredient": {
                  "name": "orange peel",
                  "created_at": 1505133506,
                  "display_plural": "orange peels",
                  "id": 2981,
                  "display_singular": "orange peel",
                  "updated_at": 1509035096
                }
              },
              {
                "position": 6,
                "measurements": [
                  {
                    "unit": {
                      "system": "none",
                      "name": "",
                      "display_plural": "",
                      "display_singular": "",
                      "abbreviation": ""
                    },
                    "quantity": "1",
                    "id": 714738
                  }
                ],
                "raw_text": "1 whole cinnamon stick",
                "extra_comment": "",
                "ingredient": {
                  "name": "whole cinnamon stick",
                  "created_at": 1668710042,
                  "display_plural": "whole cinnamon sticks",
                  "id": 10487,
                  "display_singular": "whole cinnamon stick",
                  "updated_at": 1668710042
                },
                "id": 97862
              }
            ],
            "name": "Cranberry Sauce (or use store-bought)",
            "position": 1
          },
          {
            "name": "Pretzel Stackers",
            "position": 2,
            "components": [
              {
                "measurements": [
                  {
                    "unit": {
                      "system": "none",
                      "name": "",
                      "display_plural": "",
                      "display_singular": "",
                      "abbreviation": ""
                    },
                    "quantity": "24",
                    "id": 714730
                  }
                ],
                "raw_text": "24 Snyder’s of Hanover® Pretzel Snaps 3⁄4 cup ricotta cheese",
                "extra_comment": "",
                "ingredient": {
                  "updated_at": 1668694389,
                  "name": "Snyder’s of Hanover® Pretzel Snaps",
                  "created_at": 1668694389,
                  "display_plural": "Snyder’s of hanover® pretzel snaps",
                  "id": 10463,
                  "display_singular": "Snyder’ of hanover® pretzel snaps"
                },
                "id": 97864,
                "position": 8
              },
              {
                "raw_text": "n/a",
                "extra_comment": "",
                "ingredient": {
                  "display_plural": "ricotta cheeses",
                  "id": 2,
                  "display_singular": "ricotta cheese",
                  "updated_at": 1509035290,
                  "name": "ricotta cheese",
                  "created_at": 1493246113
                },
                "id": 97892,
                "position": 9,
                "measurements": [
                  {
                    "unit": {
                      "name": "gram",
                      "display_plural": "g",
                      "display_singular": "g",
                      "abbreviation": "g",
                      "system": "metric"
                    },
                    "quantity": "150",
                    "id": 714740
                  },
                  {
                    "unit": {
                      "system": "imperial",
                      "name": "cup",
                      "display_plural": "cups",
                      "display_singular": "cup",
                      "abbreviation": "c"
                    },
                    "quantity": "¾",
                    "id": 714739
                  }
                ]
              },
              {
                "ingredient": {
                  "created_at": 1495134627,
                  "display_plural": "fresh rosemaries",
                  "id": 476,
                  "display_singular": "fresh rosemary",
                  "updated_at": 1509035257,
                  "name": "fresh rosemary"
                },
                "id": 97865,
                "position": 10,
                "measurements": [
                  {
                    "unit": {
                      "system": "none",
                      "name": "small sprig",
                      "display_plural": "small sprigs",
                      "display_singular": "small sprig",
                      "abbreviation": "small sprig"
                    },
                    "quantity": "12",
                    "id": 714732
                  }
                ],
                "raw_text": "12 small sprigs of fresh rosemary, optional Orange zest, for garnish",
                "extra_comment": "optional"
              },
              {
                "raw_text": "n/a",
                "extra_comment": "for garnish ",
                "ingredient": {
                  "updated_at": 1509035256,
                  "name": "orange zest",
                  "created_at": 1495141697,
                  "display_plural": "orange zests",
                  "id": 487,
                  "display_singular": "orange zest"
                },
                "id": 97893,
                "position": 11,
                "measurements": []
              }
            ]
          }
        ],
        "brand_id": 120,
        "user_ratings": {
          "count_positive": 2,
          "score": 1,
          "count_negative": 0
        },
        "total_time_minutes": null,
        "total_time_tier": {
          "display_tier": "Under 30 minutes",
          "tier": "under_30_minutes"
        },
        "num_servings": 12,
        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/411126.jpg",
        "video_url": "https://vid.tasty.co/output/262154/hls24_1668638306.m3u8",
        "topics": [
          {
            "slug": "bbq",
            "name": "BBQ Season"
          },
          {
            "name": "Best Vegetarian",
            "slug": "best-vegetarian"
          },
          {
            "name": "Christmas",
            "slug": "christmas"
          },
          {
            "name": "Fall Recipes",
            "slug": "fall"
          },
          {
            "name": "Thanksgiving",
            "slug": "thanksgiving"
          },
          {
            "name": "Winter Recipes",
            "slug": "winter"
          },
          {
            "name": "Snacks",
            "slug": "snacks"
          },
          {
            "slug": "american",
            "name": "American"
          }
        ],
        "facebook_posts": [],
        "language": "eng",
        "show_id": 17,
        "description": "Our quick and easy homemade cranberry sauce is flavored with orange and cinnamon to tap into those holiday flavors (store-bought cranberry sauce can be used too). We stack two Snyder’s of Hanover® Pretzel Snaps, “gluing” them together with a smear of ricotta, then adding a dollop more ricotta and some of our cranberry sauce on top. The optional rosemary sprig garnish seals in the holiday vibes and the bit of orange zest adds citrusy aroma.",
        "renditions": [
          {
            "container": "mp4",
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/262154/square_720/1668638306_00001.png",
            "bit_rate": 1833,
            "aspect": "portrait",
            "name": "mp4_404x720",
            "maximum_bit_rate": null,
            "file_size": 9639330,
            "url": "https://vid.tasty.co/output/262154/square_720/1668638306",
            "duration": 42075,
            "content_type": "video/mp4",
            "width": 404,
            "minimum_bit_rate": null,
            "height": 720
          },
          {
            "width": 180,
            "maximum_bit_rate": null,
            "container": "mp4",
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/262154/square_320/1668638306_00001.png",
            "file_size": 3329083,
            "url": "https://vid.tasty.co/output/262154/square_320/1668638306",
            "duration": 42075,
            "aspect": "portrait",
            "height": 320,
            "bit_rate": 633,
            "content_type": "video/mp4",
            "minimum_bit_rate": null,
            "name": "mp4_180x320"
          },
          {
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/262154/landscape_720/1668638306_00001.png",
            "url": "https://vid.tasty.co/output/262154/landscape_720/1668638306",
            "bit_rate": 1831,
            "content_type": "video/mp4",
            "aspect": "portrait",
            "width": 404,
            "minimum_bit_rate": null,
            "name": "mp4_404x720",
            "height": 720,
            "container": "mp4",
            "file_size": 9626584,
            "duration": 42075,
            "maximum_bit_rate": null
          },
          {
            "name": "mp4_270x480",
            "height": 480,
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/262154/landscape_480/1668638306_00001.png",
            "file_size": 5531409,
            "content_type": "video/mp4",
            "width": 270,
            "aspect": "portrait",
            "minimum_bit_rate": null,
            "maximum_bit_rate": null,
            "container": "mp4",
            "url": "https://vid.tasty.co/output/262154/landscape_480/1668638306",
            "duration": 42075,
            "bit_rate": 1052
          },
          {
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/262154/1445289064805-h2exzu/1668638306_00001.png",
            "url": "https://vid.tasty.co/output/262154/hls24_1668638306.m3u8",
            "bit_rate": null,
            "minimum_bit_rate": 272,
            "name": "low",
            "maximum_bit_rate": 2855,
            "container": "ts",
            "file_size": null,
            "duration": 42084,
            "content_type": "application/vnd.apple.mpegurl",
            "aspect": "portrait",
            "width": 608,
            "height": 1080
          }
        ],
        "keywords": "",
        "brand": {
          "id": 120,
          "slug": "snyders-of-hanover-r",
          "image_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/520db462496a40c7acf82656c1b217c9.jpeg",
          "name": "Snyder’s of Hanover®"
        },
        "buzz_id": null,
        "updated_at": 1668710203,
        "is_one_top": false,
        "yields": "Description: Our quick and easy homemade cranberry sauce is flavored with orange and cinnamon to tap into those holiday flavors (store bought cranberry sauce can be used too). We stack two Snyder’s of Hanover® Pretzel Snaps, “gluing” them together with a ",
        "prep_time_minutes": 10,
        "tips_and_ratings_enabled": true,
        "created_at": 1668638766
      }
    
     // const fakeRecipe = fakeRecipes.results[0]
      
    const recipe = {
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
    
    return recipe 
}


