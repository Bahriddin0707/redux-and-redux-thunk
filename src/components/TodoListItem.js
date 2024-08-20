import { connect } from "react-redux";
import {
  completeTodoRequest,
  removeTodoRequest,
} from "../redux/thunks/todoThunk";

const TodoListItem = ({ todo, removeTodo, completeTodo }) => {
  const deleteHandler = (id) => {
    removeTodo(id);
  };

  const completeHandler = (todo) => {
    completeTodo(todo);
  };

  return (
    <div
      className={`todo-item-container ${
        todo.isCompleted && "completed-todo-item"
      }`}
    >
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? null : (
          <button
            className="completed-button"
            onClick={() => completeHandler(todo)}
          >
            Mark a completed
          </button>
        )}

        <button
          className="removed-button"
          onClick={() => deleteHandler(todo._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTodoRequest(id)),
    completeTodo: (todo) => dispatch(completeTodoRequest(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
