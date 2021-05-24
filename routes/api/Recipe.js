const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");


router
  .route("/")
  .get(recipeController.findAll)
  .post(recipeController.save);

  router
  .route("/:id")
  .get(recipeController.findById)
  .delete(recipeController.remove);


module.exports = router;
