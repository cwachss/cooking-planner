const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(``, {
    url: "https://allrecipes.com/recipe/282681/lace-cookies-florentine-cookies/",
    referrer: "https://allrecipes.com/recipe/282681/lace-cookies-florentine-cookies/",

    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });

export const getRecipe = () => {
    return JSON.stringify(dom)
}

