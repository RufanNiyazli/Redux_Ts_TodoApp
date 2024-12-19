import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";

import { TodoType } from "../Types/Todo";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Redux/TodoSlice";
import { useState } from "react";
interface todoProps {
  todoProps: TodoType;
}
function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;
  const [newContent, setNewContent] = useState<string>(content);
  const [editable, setEditable] = useState<boolean>(true);
  const dispatch = useDispatch();
  const remove = (id: number) => {
    dispatch(removeTodo(id));
  };
  const update = () => {
    const payload: TodoType = {
      id: id,
      content: newContent
    };
    dispatch(updateTodo(payload));
    setEditable(!editable);
  };

  return (
    <div className="todo-container">
      <div className="content" key={id}>
        {editable ? (
          content
        ) : (
          <input
            className="update-input"
            type="text"
            value={newContent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewContent(e.target.value)
            }
          />
        )}
      </div>
      <div className="buttons">
        {editable ? (
          <FaRegEdit
            onClick={update}
            style={{ cursor: "pointer", fontSize: "23px", marginRight: "3px" }}
          />
        ) : (
          <TiTickOutline
            onClick={update}
            style={{ cursor: "pointer", fontSize: "23px", marginRight: "3px" }}
          />
        )}

        <FaTrash
          style={{
            cursor: "pointer",
            fontSize: "23px"
          }}
          onClick={() => remove(id)}
        />
      </div>
    </div>
  );
}

export default Todo;
