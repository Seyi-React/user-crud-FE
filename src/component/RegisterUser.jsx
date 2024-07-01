import React, { useState } from "react";
import axios from "axios";

const RegisterUser = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", user)
      .then((response) => {
        console.log(response.data);
        setUser({ name: "", email: "" });
   
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register User</button>
    </form>
  );
};

export default RegisterUser;
