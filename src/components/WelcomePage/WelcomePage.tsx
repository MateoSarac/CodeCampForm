import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";

export const WelcomePage: FC = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const handleToDo = () => {
    navigate("/ToDo");
  };

  return (
    <div className="welcome-page">
      <div className="welcome-page__welcome-card">
        <h1>Welcome {user.name}! </h1>
        <h2>Your email: {user.email}</h2>
        <h2>Your gender: {user.gender}</h2>
        <h2>Your country: {user.country}</h2>
        <button
          className="home-page__start-button"
          type="button"
          onClick={handleToDo}
        >
          To-Do App
        </button>
        <button
          className="welcome-page__welcome-button"
          onClick={handleNavigate}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
