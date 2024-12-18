import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { TodoType } from "../Types/Todo";
interface todoProps {
  todoProps: TodoType;
}
function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;
  return (
    <div className="todo-container">
      <div className="content" key={id}>
        {content}
      </div>
      <div className="buttons">
        <FaRegEdit
          style={{
            cursor: "pointer",
            fontSize: "23px",
            marginRight: "3px"
          }}
        />
        <FaTrash
          style={{
            cursor: "pointer",
            fontSize: "23px"
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
