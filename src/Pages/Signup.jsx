import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

// import AdCarousel from "../Components/AdCarousel";
function SignForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://6685a3abb3f57b06dd4d6580.mockapi.io/signup", {
        username,
        email,
        password,
      })
      .then(() => {
        Navigate("/login");
      });
    //     .then((res) => {
    //       const user = res.data.find(
    //         (user) =>
    //           user.username === username &&
    //           user.email === email &&
    //           user.password === password
    //       );
    //       if (user) {
    //         console.log("User verified:", user);
    //         // Handle successful login (e.g., redirect to another page)
    //       } else {
    //         setError("Invalid username, email, or password");
    //       }
    //     })
    //     .catch((err) => {
    //       console.error("Error fetching users:", err);
    //       setError(
    //         "An error occurred while verifying credentials. Please try again."
    //       );
    //     });
    //
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      {/* <AdCarousel /> */}

      <div className="flex flex-col items-center justify-center w-full max-w-md px-8 py-4 bg-white shadow-md rounded-lg">
        <img src="/path/to/logo.png" alt="Logo" className="w-24 h-24 mb-4" />{" "}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default SignForm;
