const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");


router
  .route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);


module.exports = router;
