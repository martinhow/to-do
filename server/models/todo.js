const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const { Schema } = mongoose;

const todoSchema = new Schema({
  id: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  complete: {
    type: Boolean,
    required: true
  }
});

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;