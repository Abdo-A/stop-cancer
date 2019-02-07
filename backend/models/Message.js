const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  writer: {
    type: String
  },
  text: {
    type: String
  }
});

module.exports = Message = mongoose.model('message', MessageSchema);
