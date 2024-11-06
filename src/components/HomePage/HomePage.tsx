import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/login");
  };

  return (
    <div className="home-page">
      <div className="home-page__home">
        <h1>Welcome to Mateo&Andrej's Page!</h1>
        <button
          className="home-page__start-button"
          type="button"
          onClick={handleHomePage}
        >
          Start
        </button>
      </div>
    </div>
  );
};
