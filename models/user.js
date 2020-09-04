const mongoose = require('mongoose');

// USER SCHEMA AND MODEL
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }] // ARRAY OF MONGOOSE OBJECT IDS (type) BELONGING TO A POST (ref).
});

module.exports = mongoose.model("User", userSchema);