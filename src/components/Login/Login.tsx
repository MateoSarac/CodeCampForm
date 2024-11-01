import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")!);

  let validateData = false;

  const handleSubmit = () => {
    if (validateData) {
      navigate("/welcome");
    }
  };

  return (
    <form id="loginForm" name="loginForm">
      <label>
        Email:
        <input
          type="email"
          onChange={(e) => {
            if (e.target.value === user.email) {
              validateData = true;
            }
          }}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          onChange={(e) => {
            if (e.target.value === user.password) {
              validateData = true;
            }
          }}
        />
      </label>
      <br />
      <label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </label>
    </form>
  );
};
