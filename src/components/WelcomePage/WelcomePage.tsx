import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const WelcomePage: FC = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {user.name}. </h1>
      <h2>Your email: {user.email}</h2>
      <h2>Your gender: {user.gender}</h2>
      <h2>Your country: {user.country}</h2>
      <button onClick={handleNavigate}>Back to Home</button>
    </div>
  );
};
