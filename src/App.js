import { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username });
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            this.state.username ? (
              <Chat username={this.state.username} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
      </Routes>
    );
  }
}

export default App;
