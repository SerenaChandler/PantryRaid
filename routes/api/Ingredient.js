const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");


router
  .route("/")
  .get(ingredientController.findAll)
  .post(ingredientController.save);

  router
  .route("/:id")
  .get(ingredientController.findById)
  .delete(ingredientController.remove)
  .put(ingredientController.update)


module.exports = router;
