const router = require("express").Router();
const userController = require("../../controllers/userController");


router
  .route("/")
  .post(userController.save)
  //.post(userController.loginCred);

  router
  .route("/login")
  .post(userController.loginCred)

  router
  .route("/:id")
  .get(userController.findById)
  .delete(userController.remove);


module.exports = router;
