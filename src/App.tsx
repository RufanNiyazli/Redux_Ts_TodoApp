import "./App.css";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";
function App() {
  return (
    <div className="container">
      <TodoCreate/>
      <TodoList/>
    </div>
  );
}

export default App;
