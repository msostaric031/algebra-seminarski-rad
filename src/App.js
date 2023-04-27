import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          username ? <Chat username={username} /> : <Navigate to="/login" />
        }
      />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;
