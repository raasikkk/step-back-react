import { useState } from "react";

const Accordions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        {title}
        <button>{isActive ? "-" : "+"}</button>
      </div>
      {isActive ? content : ""}
    </div>
  );
};

export default Accordions;
