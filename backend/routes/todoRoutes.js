const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

// GET All TODOS
router.get("/", getTodos);

// POST a new todo
router.post("/", createTodo);

// DELETE an existing todo
router.delete("/:id", deleteTodo);

// UPDATE existing todo
router.put("/:id", updateTodo);

module.exports = router;
