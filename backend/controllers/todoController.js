const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json({ message: "success", todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// create a new todo
const createTodo = async (req, res) => {
  const { text, isCompleted } = req.body;
  try {
    const newTodo = await Todo.create({
      text,
      isCompleted,
    });

    res.status(201).json({ message: "success", newTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete existing todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }

  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: id });
    if (!deletedTodo) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.status(200).json({ message: "Deleted successfully", deletedTodo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update existing todo
const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found" });
  }

  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
        isCompleted: true,
      }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.status(200).json({ message: "Updated", updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
