const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Message = mongoose.model('message');

// @route  GET api/message/all
// @desc   Get all messages
// @access Public
router.get('/all', (req, res) => {
  Message.find()
    .sort({ date: -1 })
    .then((messages) => {
      res.json(messages);
    });
});

// @route  POST api/message/new
// @desc   Post a message
// @access Public
router.post('/new', (req, res) => {
  const newMessage = new Message({
    writer: req.body.writer,
    text: req.body.text
  });
  newMessage.save().then(() => {
    res.json({ success: true });
  });
});

module.exports = router;
