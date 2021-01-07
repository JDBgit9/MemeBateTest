const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  debate: { type: String, required: true },
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  category: { type: String, required: true },
  format: {type: String, required: true },
  source1: { type: String },
  source2: { type: String },
  source3: { type: String },
  tags: { type: String },
  points: { type: Number, required: true, default: 100 },
  memebaters: { type: Number, required: true, default: 0 },
  wins: { type: Number, required: true, default: 0 },
  losses: { type: Number, required: true, default: 0 }
});

const Media = mongoose.model("media", mediaSchema);

module.exports = Media;