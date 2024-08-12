import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import Loader from "./Loader";
import { loadTodos } from "../redux/thunks/todoThunk";

const TodoList = () => {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

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

export default TodoList;
