import { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";

class App extends Component {
  constructor() {
    super();
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username });
  };
  toggleSidebar = () => {
    this.sidebar.ToggleSidebar();
  };
  handleLogout = () => {
    this.setState({ username: "" });
  };
  render() {
    return (
      <div className="App">
        <Header
          username={this.state.username}
          toggleSidebar={this.toggleSidebar}
          handleLogout={this.handleLogout}
        />
        <Sidebar
          ref={(sidebar) => (this.sidebar = sidebar)}
          toggleSidebar={this.toggleSidebar}
          username={this.props.username}
        />
        <Routes>
          <Route
            path="/algebra-seminarski-rad/"
            element={
              this.state.username ? (
                <Chat username={this.state.username} />
              ) : (
                <Navigate to="/algebra-seminarski-rad/login" />
              )
            }
          />
          <Route
            path="/algebra-seminarski-rad/login"
            element={<Login onLogin={this.handleLogin} />}
          />
          <Route
            path="/algebra-seminarski-rad/about"
            element={
              this.state.username ? (
                <About />
              ) : (
                <Navigate to="/algebra-seminarski-rad/login" />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
