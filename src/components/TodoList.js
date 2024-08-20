import { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import Loader from "./Loader";
import { loadTodos } from "../redux/thunks/todoThunk";

const TodoList = ({ todos, isLoading, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="list-wrapper">
      <NewTodoForm />

      {isLoading ? (
        <Loader />
      ) : (
        todos.map((todo) => {
          return <TodoListItem todo={todo} key={todo._id} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { todos, isLoading } = state.todos;
  return { todos, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchTodos: () => dispatch(loadTodos()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
