import "./register.css";

export default function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Enter password again" className="loginInput" />
            <button className="loginButton">Sign-up</button>
            <button className="registerButton">Already a member? Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
