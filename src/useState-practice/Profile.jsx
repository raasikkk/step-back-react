import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={profile.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={profile.age}
        onChange={handleChange}
      />
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
