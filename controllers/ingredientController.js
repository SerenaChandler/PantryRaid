const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log("help")
    db.Ingredient.findAll(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Ingredient.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  save: function (req, res) {
    // const userInfo 
    db.Ingredient.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Ingredient.findByPk( req.params.id )
      .then((dbModel) => dbModel.destroy())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.body.looking);
    db.Ingredient.update({looking:req.body.looking},{where:{id:req.params.id}})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
  }
};
//function to get userID from front end to pass to the API function