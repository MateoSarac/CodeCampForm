import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login: FC = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")!);

  let validateData = false;

  const handleLogin = () => {
    if (validateData) {
      navigate("/welcome");
    }
  };

  const handleToReg = () => {
    navigate("/register");
  };

  return (
    <div className="login-page">
      <form id="loginForm" name="loginForm" className="login-page__login-form">
        <label>Email:</label>
        <input
          type="email"
          required
          placeholder="Enter Your Email Address"
          onChange={(e) => {
            if (e.target.value === user.email) {
              validateData = true;
            }
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          placeholder="Enter Your Password"
          onChange={(e) => {
            if (e.target.value === user.password) {
              validateData = true;
            }
          }}
        />
        <button
          className="login-page__login-button"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <button className="login-page__register-button" onClick={handleToReg}>
        New to our site? Register now!
      </button>
    </div>
  );
};
