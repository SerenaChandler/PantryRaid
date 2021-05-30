import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRecipes: function (ingredients, calories, health, diet) {
    // add + before each new ingredient
    // calories search
    // health search
    // diet search
    if (calories) {
      return axios.get(
        `https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794&calories=${calories}`
      );
    } else if (calories && health) {
      return axios.get(
        `https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794&calories=${calories}&health=${health}`
      );
    } else if (calories && health && diet) {
      return axios.get(
        `https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794&calories=${calories}&health=${health}&diet=${diet}`
      );
    } else {
      return axios.get(
        `https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794`
      );
    }
  },

  getRecipesTest: function (search) {
    return axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794`
    );
  },

  getIngredientsTest: function (search) {
    return axios.get(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${search}&app_id=9aa9d53e&app_key=f2084d29ccda80e5c667c848bcdba419 `
    );
  },

  saveRecipe: function (savedRecipe) {
    return axios.post("/api/Recipe/", savedRecipe)
  },


  getSavedRecipes: function () {
    return axios.get("/api/Recipe");
  }
  
};
