const User = require("./User");
const Ingredient = require("./Ingredient");
const Recipe = require("./Recipe");

User.hasMany(Ingredient, {
  foreignKey: "user_id",
});

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Ingredient.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

Recipe.hasMany(Ingredient, {
  foreignKey: "recipe_id",
});

Ingredient.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});

module.exports = { User, Ingredient, Recipe };
