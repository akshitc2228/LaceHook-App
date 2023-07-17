import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const { dispatch } = useContext(AuthContext);

  const handleClick = async(e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      try {
        await axios.post("http://localhost:8080/auth/register", user);
        loginCall(
          { email: email.current.value, password: password.current.value },
          dispatch
        );
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LaceHook</h3>
          <span className="loginDescription">
            We probably won't face a copyright issue this way
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              ref={email}
              type="email"
              placeholder="Email"
              className="loginInput"
            />
            <input
              required
              ref={username}
              placeholder="Username"
              className="loginInput"
            />
            <input
              minLength={6}
              required
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              minLength={6}
              required
              ref={confirmPassword}
              type="password"
              placeholder="Enter password again"
              className="loginInput"
            />
            <button className="loginButton" type="submit">Sign-up</button>
            <button className="registerButton">Already a member? Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
