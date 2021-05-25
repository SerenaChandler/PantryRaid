const router = require("express").Router();
const userController = require("../../controllers/userController");


router
  .route("/")
  .get(userController.findAll)
  .post(userController.save);

  router
  .route("/:id")
  .get(userController.findById)
  .delete(userController.remove);


module.exports = router;
