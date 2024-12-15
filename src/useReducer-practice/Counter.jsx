import { counterReducer, initialState } from "./counterReducer";
import { useReducer, useState } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const [inputValue, setInputValue] = useState(0);

  const incrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };

  const decrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={incrementByAmount}>Add</button>
        <button onClick={decrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
