import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user)

  const checkFetching = (e) => {
    console.log(isFetching)
  }

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
              type="email"
              required
              placeholder="Email"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              minLength={6}
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching} onClick={checkFetching}>{isFetching ? <CircularProgress color="white" size="20px"></CircularProgress> : "Log-In"}</button>
            <span className="signInOptions">Or</span>
            <button className="registerButton" onClick={checkFetching}>{isFetching ? <CircularProgress color="white" size="20px"></CircularProgress> : "Create a new account"}</button>
            <span className="forgotPass">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
}
