const router = require("express").Router();
const memebateController = require("../../controllers/memebate");
// const Memebate = require(path.join(__dirname, "./memebate"));

// Matches with "/api/books"
router.route("/")
  .get(memebateController.findAll)
  .post(memebateController.createMemeb);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(memebateController.findMemeb)
  .put(memebateController.updateMemeb)
  .delete(memebateController.removeMemeb);

module.exports = memebate;