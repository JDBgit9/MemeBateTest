const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:3000/member"
);

const UserSeed = [
  {name: 'memebater1',
  "status": "Memebater",
   email: 'me@memebate.com',

   }

];

  db.user
  .remove({})
  .then(() => db.user.collection.insert(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const memberSeed = [
  {debate: 'Debate 1',
    title: 'Post One',
  synopsis: 'Body of post one',
  category: 'News',
  source: 'link',
  tags: ['news', 'events'],
  points: 10,
  likes: 0,
  dislikes: 0,
  memebaters: 0,
  wins: 0,
  losses: 0,

    user: {
    email: 'email',
    status: 'Debater'

  },
  date: Date()
},
{
  title: 'Post Two',
  synopsis: 'Body of post two',
  category: 'Technology',
  date: Date()
},
{
  title: 'Post Three',
  synopsis: 'Body of post three',
  category: 'Politics',
  date: Date()
},
{
  title: 'Post Four',
  synopsis: 'Body of post three',
  category: 'Anime',
  date: Date()
}

];
db.member
.remove({})
.then(() => db.user.collection.insertMany(memberSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});


