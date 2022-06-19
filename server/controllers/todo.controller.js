const TodoModel = require('../models/todo');

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200);
    res.send(todos)
  } catch (error) {
    console.log('error'.error);
    res.sendStatus(500);
  }
};

const postTodo = async (req, res) => {

  try {
    const todoObject = {
      id: req.body.id,
      name: req.body.name,
      complete: req.body.complete
    };

    const todoInsert = await TodoModel.create(todoObject);
    res.status(201);
    res.send(todoInsert);
  } catch (error) {
    console.log('error', error);
    res.sendStatus(500);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.body.id;
    const statusUpdate = req.body.complete;

    const todoUpdate = await TodoModel.findOneAndUpdate(todoId, statusUpdate)
    res.status(201);
    res.send(todoUpdate);
  } catch (error) {
    console.log('error', error);
    res.sendStatus(500);
  }
}

module.exports = { getTodos, postTodo, updateTodo }