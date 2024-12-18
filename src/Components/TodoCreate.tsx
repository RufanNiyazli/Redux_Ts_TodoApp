import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../Redux/TodoSlice";
import { TodoType } from "../Types/Todo";

function TodoCreate() {
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const handleCreate = () => {
    if (content.trim().length < 3) {
      alert("3 den yuxari");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999),
      content: content
    };
    dispatch(createTodo(payload));
    setContent("");
  };
  return (
    <div className="create-container">
      <input
        type="text"
        placeholder="Write"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default TodoCreate;
