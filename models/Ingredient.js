const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ingredient extends Model {}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    looking: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }

    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "User",
    //     key: "id",
    //   },
    // },
    // recipe_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Recipe",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Ingredient",
  }
);

module.exports = Ingredient;
