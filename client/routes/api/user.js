const router = require("express").Router();
const userController = require("../../controllers/user");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(postController.findUser)
 

module.exports = router;
