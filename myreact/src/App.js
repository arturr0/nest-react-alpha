import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    const apiUrl = "https://nest-react-alpha.onrender.com/api/users";
    console.log('Fetching from:', apiUrl); // Check the logged URL
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  
  

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
