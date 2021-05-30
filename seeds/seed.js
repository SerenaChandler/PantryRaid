const sequelize = require('../config/connection');

const {Ingredient, Recipe, User} = require('../models');

const ingData = require('./ingredient.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Ingredient.bulkCreate(ingData,{
        returning: true,
    });
    console.log("------");
    process.exit(0);
};

seedDatabase();

