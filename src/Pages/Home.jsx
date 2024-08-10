import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Foter";
import img from "../assets/labtop.png";
import imgOrange from "../assets/orange.png";
import img3 from "../assets/rotator_mobiles2024._SS435_QL85_-removebg-preview.png";
import img4 from "../assets/d-removebg-preview (4).png";
import game from "../assets/gameT.png";
import Features from "../Components/Features";
import AdCarousel from "../Components/AdCarousel";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Futers/LogInSlice";
import { setSearchTerm, setCategory, selectFilteredProducts , fetchProducts} from "../Futers/DataSlice";
import Nav from "../Components/Nav";

function Home() {
  
  const dispatch = useDispatch();
  const User = localStorage.getItem("username");
  const [search, setfirst] = useState()
  const isLoggedInn = localStorage.getItem("isLoggedIn");
  const nav = useNavigate();
  const filteredProducts = useSelector(selectFilteredProducts);
  const { searchTerm, selectedCategory } = useSelector((state) => state.products);  

  const handleLogout1 = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userid");
    nav("/login");
  };
  

  


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    setfirst(e.target.value);
    nav("/Datafilter");

  };

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  // useEffect(() => {
  //   if (searchTerm && filteredProducts.length === 0) {
  //     nav("/Datafilter"); // Redirect to Datafilter component
  //   }
  // }, [searchTerm, filteredProducts, nav]);

  return (
    <>
      <div>
        {/* Navbar */}
    <Nav/>

        {/* Main Content */}

        <div className="w-full mx-auto bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-[40px] text-white">
                  Your Electronics Destination: Shop the Latest and Greatest
                  Gadgets
                </h1>
                <p className="mt-4 text-gray-200">
                  Stay Connected, Informed, and Entertained with Our Electronics
                  Selection
                </p>
                <button className="mt-6 bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2 mt-10 ml-6 mb-0 md:mt-0 flex justify-center">
                <img
                  src={imgOrange}
                  alt="Headphones"
                  className="w-full max-w-md object-contain"
                  style={{ background: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <AdCarousel />
        {/* Section Two */}
        <div className="sectionTwo div flex mb-[40px] bg-gray-100">
          {/* Left Box */}
          <div
            className="#feb124 h-[440px] mr-[10px] mt-6  bg-[#FCA721] cursor-pointer"
            onClick={() => handleCategoryChange("Electronics")}
          >
            <h4 className="Title bg-[#FCA721]  text-[gray] w-[100px] mt-[5px] ml-[5px]">
              Smartphone
            </h4>
            <img
              className="h-[400px] w-[200px] mr-[10px] rounded-[6px] m-[auto]"
              src={img3}
              alt=""
            />
          </div>
          {/* Right Box */}
          <div>
            <div className="flex">
              <div
                className="flex-col mr-[10px] mt-6 h-[200px] w-[400px]  bg-[#F26D0E] cursor-pointer"
                onClick={() => handleCategoryChange("Gaming")}
              >
                <h4 className="Title">Gaming</h4>
                <div className="">
                  <img
                    className="w-[250px] h-[180px] mb-[10px] mt-[-5px] rounded-[6px] m-[auto]"
                    src={game}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="flex-col mr-[15px] h-[200px] mt-6 w-[390px]  bg-[#FCA721] cursor-pointer"
                onClick={() => handleCategoryChange("Wearables")}
              >
                <h4 className="Title">Laptop</h4>
                <div className="">
                  <img
                    className=" w-[250px] h-[180px]  mb-[10px] ml-[3vw] rounded-[6px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div
                className=" catogary h-[230px] w-[800px] bg-[#F26D0E] cursor-pointer"
                onClick={() => handleCategoryChange("Cameras")}
              >
                <h4 className="Title">Smart TV</h4>
                <img
                  className="h-[200px] w-[800px] mb-[10px] rounded-[6px] mt-[-20px]"
                  src={img4}
                  alt=""
                />
              </div>
              <br />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto mt-1 p-8">
          <div className="sea mb-3"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <img src={product.image} className="w-full h-80 object-cover" />
                <div className="p-4 flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-2">{product.price}$</p>
                  <Link to={`/details/${product.id}`}>
                    <button className="bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-black px-4 py-2 rounded-md hover:bg-yellow-600">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    
    </>
  );
}

export default Home;
