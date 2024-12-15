import { useState, useId } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const randomId = useId();

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: randomId,
      });
    });

    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add todo</button>

      <div>
        {todos.map(({ text, id }) => (
          <li key={id}>
            {text}
            <button onClick={() => deleteTodo(id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
