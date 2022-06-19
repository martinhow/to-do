'use strict';

const router = require('express').Router();
const todoController = require('./controllers/todo.controller');


// routes
router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.postTodo);
router.put('/todos',todoController.updateTodo);


module.exports = router;