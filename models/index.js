const User = require("./User")
const Ingredient = require("./Ingredient")
const Recipe = require("./Recipe")

User.hasMany(Ingredient, {
    foreignKey: "user_id",
});

Ingredient.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "Cascade"
})

module.exports = { User, Ingredient, Recipe};
