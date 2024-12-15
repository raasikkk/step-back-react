import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setTodos((prevTodos) => [...prevTodos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add todo</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
};

export default Todo;
