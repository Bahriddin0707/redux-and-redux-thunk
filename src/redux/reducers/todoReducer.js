import { nanoid } from "nanoid";

import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "../constants/todoTypes";

const initialState = {
  todos: [],
  isLoading: false,
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }

    case MARK_TODO_AS_COMPLETED: {
      const updatedTodos = state.todos.map((todo) => {
        if (todo._id === action.payload) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case REMOVE_TODO: {
      const updatedTodos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload],
        isLoading: false,
      };

    case LOAD_TODOS_FAILURE:
    default:
      return {
        ...state,
        isLoading: false,
      };
  }
};
