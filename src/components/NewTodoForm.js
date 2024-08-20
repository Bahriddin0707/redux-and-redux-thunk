import { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../redux/thunks/todoThunk";

const NewTodoForm = ({ onCreatePressed }) => {
  const [text, setText] = useState("");

  const addTotoHandler = () => {
    onCreatePressed(text);
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

const mapDispatchToProps = (dispatch) => {
  return { onCreatePressed: (text) => dispatch(addTodoRequest(text)) };
};

export default connect(null, mapDispatchToProps)(NewTodoForm);
