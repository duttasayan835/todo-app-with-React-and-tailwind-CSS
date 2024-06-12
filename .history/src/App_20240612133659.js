import { useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const [todos, setTodo] = useState([]);

  const addToDoHandler = (item) => {
    console.log(item);
  };
  return (
    <div className="h-screen p-3 bg-black ">
      <div className="max-w-[750px] min-h-[550px] shadow-2xl bg-white mx-auto rounded">
        <Input handler={addToDoHandler} />
        <Box data={todos} />
      </div>
    </div>
  );
}
export default App;
