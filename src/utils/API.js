import axios from "axios";

export default {
    getRecipes: function(ingredients,calories,health,diet) {
        // add + before each new ingredient
        // calories search
        // health search
        // diet search
        if (calories) {
            return axios.get(`"https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794&calories=${calories}"`)
        } else if (calories && health) {
            return axios.get(`"https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794&calories=${calories}&health=${health}"`)
        } else if (calories && health && diet) {
            return axios.get(`"https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794&calories=${calories}&health=${health}&diet=${diet}"`)
        } else {
            return axios.get(`"https://api.edamam.com/search?q=${ingredients}&app_id=7cf0a1d3&app_key=536d6fab537d44cae44549e0fe9cf794"`)
        }
    }
}