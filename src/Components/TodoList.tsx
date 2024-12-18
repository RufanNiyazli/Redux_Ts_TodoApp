import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState } from "../Redux/store";
import { TodoType } from "../Types/Todo";
function TodoList() {
  const { todos } = useSelector((store: RootState) => store.todo);

  return (
    <div
      style={{
        width: "100%"
      }}
    >
      {todos.map((todo:TodoType) => (
        <Todo key={todo.id} todoProps={todo} />
      ))}
    </div>
  );
}

export default TodoList;
