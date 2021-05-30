const sequelize = require('../config/connection');

const {Ingredient, Recipe, User} = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log("------");
    process.exit(0);
};

seedDatabase();

