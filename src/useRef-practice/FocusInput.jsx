import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef) {
      inputRef.current.focus();
      inputRef.current.value = "raasikkl watches";
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleFocus()}>Focus on raasikkk</button>
    </div>
  );
};

export default FocusInput;
