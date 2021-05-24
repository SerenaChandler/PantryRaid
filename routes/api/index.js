const router = require("express").Router();
const userRoutes = require("./User");
const ingredientRoutes = require("./Ingredient");
const recipeRoutes = require("./Recipe");


router.use("/User", userRoutes);
router.use("/Ingredient", ingredientRoutes);
router.use("/Recipe", recipeRoutes);

module.exports = router;
