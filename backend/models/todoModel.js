const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
