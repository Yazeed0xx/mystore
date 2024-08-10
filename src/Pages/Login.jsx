import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../Futers/LogInSlice";
import Logo from '../assets/logo.png'

// import AdCarousel from "../Components/AdCarousel";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://6685a3abb3f57b06dd4d6580.mockapi.io/signup")
      .then((res) => {
        const user = res.data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          console.log("User verified:", user);
          dispatch(login({ username }));
          localStorage.setItem("username", username);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userid", user.id);

          nav("/");
          // Handle successful login (e.g., redirect to another page)
        } else {
          setError("Invalid username, email, or password");
        }
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError(
          "An error occurred while verifying credentials. Please try again."
        );
      });
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      {/* <AdCarousel /> */}

      <div className="flex flex-col items-center justify-center w-full max-w-md px-8 py-4 bg-white shadow-md rounded-lg">
        <img src={Logo} alt="Logo" className="w-24 h-24 mb-4" />{" "}
        <p className="mt-4 text-gray-600">
          Welcome to our application. Please log in to continue.
        </p>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#forgot-password"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
