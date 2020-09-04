const mongoose = require('mongoose');

// POST SCHEMA AND MODEL
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
module.exports = mongoose.model("Post", postSchema);