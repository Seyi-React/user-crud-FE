import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/users/${id}`, user)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error updating the user!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUser;
