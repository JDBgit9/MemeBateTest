const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memebateSchema = new Schema({


like: { type: String, required: true },
dislike: { type: String, required: true },
memes: { type: String, required: true },
gifs:  { type: String, required: true },
emoji: { type: String, required: true },
laughs: { type: String},
vote: { type: String },
respond: { type: String },
source: { type: String },
tags: { type: String }


});


const Memebate = mongoose.model("memebate", MemebateSchema);

module.exports = Memebate;