const mongoose = require('mongoose');

let ArticlesSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Articles = mongoose.model('articles', ArticlesSchema)

module.exports = Articles
