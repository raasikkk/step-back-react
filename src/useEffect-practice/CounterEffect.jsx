import { useEffect } from "react";
import { useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count is updated ${count}`);
  }, [count]);

  return (
    <>
      <p>Count - {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default CounterEffect;
