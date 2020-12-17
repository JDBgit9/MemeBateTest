const PORT = process.env.PORT || 5000;
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button">Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        <div className="book">
          <h3>Book Number</h3>
          <h2>Book Name</h2>

          <div className="details">
            <p>👨: Author/Authors</p>
            <p>📖: Number of pages</p>
            <p>🏘️: Book Country</p>
            <p>⏰: Release date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
