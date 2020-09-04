// THIS IS A DEMO FOR ASSOCIATIONS USING "EMBEDDING DATA"

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/associations-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// ------------------SCHEMAS----------------------

// POST SCHEMA AND MODEL
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

// USER SCHEMA must be declared after POST SCHEMA, otherwise [postSchema] will return undefined.

// USER SCHEMA AND MODEL
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema] // ARRAY OF POST OBJECTS FOR USER. 
});
const User = mongoose.model("User", userSchema);

// ------CREATE AND SAVE USER, ASSIGN NEW POST TO USER----

// CREATE USER
// const newUser = new User({
//   email: "henryC@gmail.com",
//   name: "Henery Cole",
// });

// // ASSIGN SINGLE POST TO USER 
// newUser.posts.push({
//   title: "How to brew jungle juice",
//   content: "Just kidding."
// });

// // SAVE USER
// newUser.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// -----------------------------

// Just creates a post. Not assigning it. We commented this out after using associations.

// const newPost = new Post({
//   title: "My first post",
//   content: "This is content for my post"
// });

// newPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// ------------Find a user we created already and add a post------

User.findOne({ name: "Charlie Brown" }, (err, user) => {
  if (err) {
    console.log(err);
  } else {

    user.posts.push({
      title: "Another POst",
      content: "Another Day..."
    });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
    console.log(user);
  }
});

