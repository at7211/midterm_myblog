const mongoose = require('mongoose');

let USerSchema = new mongoose.Schema({
  account: {
    type: String,
  },
  password: {
    type: String,
  }
});

const User = mongoose.model('user', USerSchema)

module.exports = User
