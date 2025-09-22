import { useState } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    const res = await axios.post("https://localhost:5000/api/auth/login", {
      email: "test@example.com",
      password: "password123"
    });
    setToken(res.data.token);
  };

  const getProtected = async () => {
    if (!token) return alert("Login first!");
    const res = await axios.get("https://localhost:5000/api/protected", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setMessage(res.data.message);
  };

  return (
    <div>
      <h1>SecureBlog Frontend</h1>
      <button onClick={login}>Login</button>
      <button onClick={getProtected}>Protected Route</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
