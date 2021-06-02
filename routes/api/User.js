const router = require("express").Router();
const userController = require("../../controllers/userController");


router
  .route("/")
  .get(userController.loginCred)
  .post(userController.save)
  //.post(userController.loginCred);

  router
  .route("/:id")
  .get(userController.findById)
  .delete(userController.remove);


module.exports = router;
