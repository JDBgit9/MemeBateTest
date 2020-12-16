const {createMedia} = require("../../controllers/mbRouter");
const router = require("express").Router();


// Matches with "/api/post"
router.route("/media")
  .get(mediaController.findAll)
  .post(createMedia);

// Matches with "/api/post/:id"
router
  .route("/media/:id")
  .get(mediaController.findMedia)
  .put(mediaController.updateMedia)
  .delete(mediaController.removeMedia);

module.exports = router;
