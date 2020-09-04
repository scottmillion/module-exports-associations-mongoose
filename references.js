// THIS IS A DEMO FOR ASSOCIATIONS USING "REFERENCING DATA"
// INSTEAD OF STORING AN ARRAY OF POST OBJECTS WITH EACH USER WE JUST STORE POST IDS

const mongoose = require('mongoose');
const { getMaxListeners } = require('process');
mongoose.connect('mongodb://localhost:27017/associations-demo-3', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// SCHEMA AND MODEL IMPORTS
// USER SCHEMA must be declared after POST SCHEMA, otherwise [postSchema] will return undefined.
const Post = require("./models/post");
const User = require("./models/user");


// // CREATE AND SAVE NEW USER
// User.create({
//   email: "bob@gmail.com",
//   name: "bob"
// });

// // CREATE AND SAVE NEW POST
// Post.create({
//   title: "How to cook the best burger",
//   content: "This is the recipe!"
// });

//CREATE AND SAVE NEW POST, PUSH POST ID TO USER
// Post.create({
//   title: "How to cook the best burger part 5",
//   content: "This is the recipe mo yeah!!!!!!!!"
// }, (err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
//       if (err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post); // Our Schema makes sure that we just pass the id.
//         foundUser.save((err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         })
//       }
//     })
//   }
// });

// FIND USER
// FIND ALL POSTS FOR THAT USER


// .populate.exec takes our object references (post IDs) and returns the actual objects (the posts) in an array.
//Before [ObjectID(sdf2woijo), ObjectID(sdf2woijo)]
//After [{_id: sdf2woijo, title: blah, body: blah}, Same for second object]

User.findOne({ email: "bob@gmail.com" }).populate("posts").exec((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});