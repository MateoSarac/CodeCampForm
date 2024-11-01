import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/login");
  };
  const handleToReg = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Welcome to Mateo&Andrej's Page!</h1>
      <button onClick={handleHomePage}>Login</button>
      <br />
      <button onClick={handleToReg}>Registration</button>
    </div>
  );
};
