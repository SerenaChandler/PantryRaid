const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");


router
  .route("/")
  .get(ingredientController.findAll)
  .post(ingredientController.create);


module.exports = router;
