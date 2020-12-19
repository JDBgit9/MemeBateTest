const PORT = process.env.PORT || 3000;
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./server/routes/api");
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
