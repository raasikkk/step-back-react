import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("First render useEffect!");
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
