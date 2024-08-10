import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ handleLogout }) {
  nav = useNavigate();
  // { user, handleLogout }

  handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userid");
    nav("/login");
  };
  return (
    <div className="navbar rounded bg-[#fff]">
      <div className="navbar-start">
        <div className="logo">
          <img
            className="w-[50px] h-[50px] mt-[-17px]"
            src="https://i.pinimg.com/564x/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg"
            alt=""
          />
        </div>
        <div className="ml-4">= </div>
      </div>
      <div className="navbar-end">
        <button onClick={handleLogout} className="btnLogout ">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Logout;
