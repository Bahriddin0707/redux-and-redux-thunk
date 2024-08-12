import { nanoid } from "nanoid";

import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from "../actions/todoAction";

export const loadTodos = () => async (dispatch) => {
  dispatch(loadTodosInProgress());
  try {
    const response = await fetch("http://localhost:8080/api/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    dispatch(loadTodosSuccess(data.todos));
  } catch (err) {
    dispatch(loadTodosFailure());
    displayAlert(err);
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  const newTodo = {
    text,
    isCompleted: false,
  };

  try {
    const response = await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error("Failed to post data to server");
    }
    const todo = await response.json();
    dispatch(createTodo(todo.newTodo));
  } catch (err) {
    displayAlert(err);
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    const todo = await response.json();
    dispatch(removeTodo(todo.deletedTodo));
  } catch (err) {
    displayAlert(err);
  }
};

export const completeTodoRequest = (todo) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/todos/${todo._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    const { updatedTodo } = await response.json();
    dispatch(completeTodo(updatedTodo._id));
  } catch (err) {
    displayAlert(err);
  }
};

////
export const displayAlert = (message) => {
  alert(message);
};
