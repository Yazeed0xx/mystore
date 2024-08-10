import React, { useState } from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../Futers/LogInSlice";
import { setSearchTerm, setCategory, selectFilteredProducts , fetchProducts} from "../Futers/DataSlice";

function Nav() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [search, setfirst] = useState()
  const dispatch = useDispatch();
  const nav = useNavigate()

  const User = localStorage.getItem("username");
  const isLoggedInn = localStorage.getItem("isLoggedIn");
  const { searchTerm, selectedCategory } = useSelector((state) => state.products);  
  const handleSearchChange = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search));
    nav("/Datafilter");

  };
  return (
    <div className="py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <h1 className="font-extrabold text-blue-900">YAFHElectronic.</h1>
          </Link>
          <div className="relative flex items-center">
            <svg
              className="absolute left-3 w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
              />
            </svg>
            <form onSubmit={handleSearchChange}>
            <input
                    type="text"
                    className="pl-10 pr-3 py-2 rounded-md bg-gradient-to-r from-blue-900 to-blue-500 text-white focus:outline-none"
                    placeholder="Search..."
                    value={search}
                    onChange={(e)=> setfirst(e.target.value)}
                  />
            </form>
            
          </div>{" "}
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          {!isLoggedInn ? (
            <ul className="flex items-center space-x-4">
              <Link to="/cart">
                <svg
                  className="w-12 h-12 text-blue-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 20a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1.618-16.968a.78.78 0 0 0-.618-.312H6.472l-.39-2.466A2 2 0 0 0 4.112 0H2a1 1 0 0 0 0 2h2.112l.39 2.467 1.82 11.536a3 3 0 0 0 2.972 2.528h7.084a3 3 0 0 0 2.972-2.528L22.732 6a.993.993 0 0 0-.114-.968zM17.448 14a1 1 0 0 1-.992.857H8.584a1 1 0 0 1-.992-.857L6.8 8h12.4z" />
                </svg>
              </Link>
              <Link to="/login">
                <li className="text-blue-900 rounded-xl border-2 border-blue-900 px-3 py-2 cursor-pointer">
                  Login
                </li>
              </Link>
              <Link to="/signup">
                <li className="text-white cursor-pointer rounded-xl bg-gradient-to-r from-blue-900 to-blue-500 px-3 py-2">
                  Sign Up
                </li>
              </Link>
            </ul>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 20a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1.618-16.968a.78.78 0 0 0-.618-.312H6.472l-.39-2.466A2 2 0 0 0 4.112 0H2a1 1 0 0 0 0 2h2.112l.39 2.467 1.82 11.536a3 3 0 0 0 2.972 2.528h7.084a3 3 0 0 0 2.972-2.528L22.732 6a.993.993 0 0 0-.114-.968zM17.448 14a1 1 0 0 1-.992.857H8.584a1 1 0 0 1-.992-.857L6.8 8h12.4z" />
                </svg>
              </Link>
              <div className="text-black cursor-pointer">Welcome {User}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
