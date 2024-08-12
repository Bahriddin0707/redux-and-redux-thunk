import { useDispatch } from "react-redux";
import {
  completeTodoRequest,
  removeTodoRequest,
} from "../redux/thunks/todoThunk";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeTodoRequest(id));
  };

  const completeHandler = (todo) => {
    dispatch(completeTodoRequest(todo));
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

export default TodoListItem;
