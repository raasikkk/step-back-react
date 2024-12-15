import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const [newName, setNewName] = useState("");

  const { updateUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="update username:"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UpdateUser;
