const db = require('../models');

module.exports = {
    findAll: function(req,res){
        db.Recipe.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res){
        console.log(req.body)
        db.Recipe.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },
    findById: function(req, res){
        db.Recipe.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        console.log(req.params.id)
        db.Recipe.findByPk(req.params.id)
        .then(dbModel =>{ 
            console.log("meow")
            dbModel.destroy()
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => { 
            console.log("bark")
            res.status(422).json(err)});
    }
}