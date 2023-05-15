import { useRef, useState } from "react";
import Chat from "./components/Chat";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";

const App = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setUsername(username);
  };
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    sidebarRef.current.toggleSidebar();
  };
  const handleLogout = () => {
    setUsername("");
  };
  return (
    <div className="App">
      <Header
        username={username}
        toggleSidebar={toggleSidebar}
        handleLogout={handleLogout}
      />
      <Sidebar
        ref={sidebarRef}
        toggleSidebar={toggleSidebar}
        username={username}
      />
      <Routes>
        <Route
          path="/"
          element={
            username ? <Chat username={username} /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/about"
          element={
            username ? <About username={username} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
