import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "../constants/todoTypes";

// Action creators
export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const completeTodo = (id) => {
  return {
    type: MARK_TODO_AS_COMPLETED,
    payload: id,
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};

export const loadTodosInProgress = () => {
  return {
    type: LOAD_TODOS_IN_PROGRESS,
  };
};

export const loadTodosSuccess = (todos) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    payload: todos,
  };
};

export const loadTodosFailure = () => {
  return {
    type: LOAD_TODOS_FAILURE,
  };
};
