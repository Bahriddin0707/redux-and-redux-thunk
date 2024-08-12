import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../redux/thunks/todoThunk";

const NewTodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTotoHandler = () => {
    dispatch(addTodoRequest(text));
  };

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="new-todo-button" onClick={addTotoHandler}>
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
