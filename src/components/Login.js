import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [usernameText, setUsernameText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(usernameText);
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter username"
          required
          value={usernameText}
          onChange={(e) => {
            setUsernameText(e.target.value);
          }}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
