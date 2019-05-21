const mongoose = require('mongoose');

let VideoSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  date: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  },
  content: {
    type: String,
  },
});

// Creating a table within database with the defined schema
const Video = mongoose.model('video', VideoSchema)

// Exporting table for querying and mutating
module.exports = Video
