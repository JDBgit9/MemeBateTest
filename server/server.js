require('dotenv/config')
const express = require("express");
const app = express();
const PORT = 4041;
const cors = require("cors");
const stream = require("getstream");
const { MongoClient } = require("mongodb");
const Media = require("./models/media");
const mongoose = require("mongoose");

const user = new MongoClient(
  "mongodb+srv://110120MongoDBatlas_:110120MongoDBatlas_@workout-tracker.bkgq3.mongodb.net/?retryWrites=true&w=majority"
);

const userFlatFeed = stream.connect(
  "h8mj85cvam2q",
  "pcekttsymy7znf3pm9t5qwdcp2gzcsrhmhx8katk6wmwygakhxgyyykxsz252dqg",
  "103679"
);


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection?.once("open", () => {
  console.log("\x1b[36m%s\x1b[0m'", "MongoDB database connection established successfully");
});

app.use(cors({ origin: true }));

app.use(express.json());

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

app.get("/", async function(req, res){
  try{
    await client.connect();
   await listDatabases(client);
  } catch(e){console.error(e)}
});
app.post("/media", async function(req, res){
  if(req.body){
  try{
    await client.connect();
    client.db("Memebate").collection("media").insertOne(req.body, function(err, res){
      if(err) throw err;
      console.log("one record inserted");
      client.close();
    }).createCollection("memebates")
    res.status(200).json({message: req.body})
  } catch(e){
    console.error(e)
  }}
  else{res.status(500).json({error:"not enough information", request: req.body})}
})
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

app.listen(PORT, function (error) {
  if (error) console.log("listen error", error);
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
