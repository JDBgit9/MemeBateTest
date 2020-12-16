const router = require("express").Router();
const postController = require("../../controllers/memebater");

// Matches with "/api/books"
router.route("/")
  .get(memebaterController.findAll)
  .post(memebaterController.createMeme);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(memebaterController.findMeme)
  .put(memebaterController.updateMeme)
  .delete(memebaterController.removeMeme);

module.exports = memebater;