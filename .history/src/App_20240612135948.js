import { useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const [todos, setTodo] = useState([]);

  const removeTodo = (id) => {
    const newTodos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodo(newTodos);
  };

  const addToDoHandler = (item) => {
    setTodo([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };
  return (
    <div className="h-[50%] p-3 bg-black ">
      <div className="max-w-[750px] min-h-[550px] shadow-2xl bg-white mx-auto rounded">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeTodo} />
      </div>
    </div>
  );
}
export default App;
