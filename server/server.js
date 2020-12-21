require("dotenv/config");
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
// const PORT = 4041;
const cors = require("cors");
const { MongoClient } = require("mongodb");
const Media = require("./models/media");
const Memebater = require("./models/memebater");
const mongoose = require("mongoose");
const distDir = __dirname + "/dist/";


const user = new MongoClient(
  "mongodb+srv://110120MongoDBatlas_:110120MongoDBatlas_@workout-tracker.bkgq3.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connect(
  "mongodb+srv://110120MongoDBatlas_:110120MongoDBatlas_@workout-tracker.bkgq3.mongodb.net/Memebate?retryWrites=true&w=majority",
  {}
);

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors({ origin: true }));
app.listen(process.env.PORT || 3000);
app.use(express.json());
app.use(express.static(distDir));

app.get("/media", async (request, response) => {
  console.log("MEDIA IS BEING REQUESTED");
  try {
    let result = await Media.find().exec();
    console.log("MEDIA FINISHED SUCCESS\n");
    console.log(result);
    response.send(result);
  } catch (error) {
    console.error("MEDIA FINISHED ERROR: ", error);
    response.status(500).send(error);
  }
});
app.post("/media", async (request, response) => {
  const media = new Media(request.body);

  media.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Save to database");
      response.status(200).send(request.body);
    }
  });
});

app.get("/", async function (req, res) {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  }
});

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
app.get("/memebater", async (request, response) => {
  console.log("MEMEBATER IS BEING REQUESTED");
  try {
    let result = await Memebater.find().exec();
    console.log("MEMEBATER FINISHED SUCCESS\n");
    console.log(result);
    response.send(result);
  } catch (error) {
    console.error("MEMEBATER FINISHED ERROR: ", error);
    response.status(500).send(error);
  }
});
app.post("/memebater", async (request, response) => {
  const memebater = new Memebater(request.body);

  memebater.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Save to database");
      response.status(200).send(request.body);
    }
  });
});

app.listen(PORT, function (error) {
  if (error) console.log("listen error", error);
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
