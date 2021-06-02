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
    return axios.post("/api/Recipe", savedRecipe)
  },
  

  saveIngredient: function (savedIngredient) {
    return axios.post("/api/Ingredient", savedIngredient)
  },


  getSavedRecipes: function () {
    return axios.get("/api/Recipe");
  },

  getSavedIngredients: function () {
    console.log("pleeeeeease")
    return axios.get("/api/Ingredient");
  },


  saveUser: function (savedUser) {
    return axios.post("/api/User", savedUser)
  },

  checkUser: function(loginData){
    return axios.post("api/User/login", loginData)
  },

  
  deleteRecipe: function(id) {
    console.log("coke coffee")
    return axios.delete("/api/Recipe/" + id);
  },

  deleteIngredient: function(id) {
    console.log("coke not coffee")
    return axios.delete("/api/Ingredient/" + id);
  },

  updateIng: function(id,looking){
    console.log("updated!");
    return axios.put("/api/Ingredient/" + id,{looking});
  }

};
