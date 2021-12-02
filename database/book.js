const mongoose = require("mongoose");

//Book SCHEMA
const BookSchema = mongoose.Schema({
  ISBN: String,
  title: String,
  pubDate: String,
  language: String,
  numPage: Number,
  author: [Number],
  publications: [Number],
  category: [String]

});

//creating book model
const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;
