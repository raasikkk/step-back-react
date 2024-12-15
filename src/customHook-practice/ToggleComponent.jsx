import useToggle from "./hooks/useToggle";

const ToggleComponent = () => {
  const value = useToggle();
  return (
    <>
      <div>{value ? "Hello" : "no "}</div>
      <button onClick={() => useToggle(value)}>Toggle message</button>
    </>
  );
};

export default ToggleComponent;
