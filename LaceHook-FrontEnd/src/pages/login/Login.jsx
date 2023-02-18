import "./login.css";

export default function Login() {
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
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="signInOptions">Or</span>
            <button className="registerButton">Create a new account</button>
            <span className="forgotPass">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
