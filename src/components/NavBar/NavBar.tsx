import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")!);
  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
    console.log("user");
  };

  return (
    <div className="navBar">
      {user ? (
        <>
          <span>{user.email}</span>
          <span>
            <button onClick={handleSignOut}>Sign out</button>
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
