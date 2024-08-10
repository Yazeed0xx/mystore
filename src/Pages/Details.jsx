import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/product-return.png";
import img2 from "../assets/free-delivery.png";
import Nav from "../Components/Nav";
import img3 from "../assets/payment-method.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../Futers/DataSlice';
const Details = () => {
  // const [product, setProduct] = useState({});
  const [showAdd, setShowAdd] = useState(false);
  const { id } = useParams(); // Get the product ID from the route parameters
  const dispatch = useDispatch();

  const { selectedProduct, productDetailsStatus, error } = useSelector((state) => state.products);
console.log(selectedProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

  if (productDetailsStatus === 'loading') return <div>Loading...</div>;
  if (productDetailsStatus === 'failed') return <div>Error: {error}</div>;
  if (!selectedProduct) return <div>No product details available.</div>;

  const addToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = savedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      savedCart.push(selectedProduct);
    }

    localStorage.setItem("cart", JSON.stringify(savedCart));
    setShowAdd(true);
  };

  const handleQuantity = (quantity) => {
    selectedProduct((prevProduct) => ({ ...prevProduct, quantity }));
  };
// console.log(selectedProduct);

  return (
    <>
      <Nav />
      <div className="container mx-auto mt-5 p-4">
        <div className="max-w-4xl md:flex">
          <div className="md:w-1/2 p-4">
            <img
              className="h-auto w-full object-cover md:h-full"
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
          </div>
          <div className="p-6 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-[#1E3A8A] font-semibold">
              {selectedProduct.category}
            </div>
            <h1 className="block mt-1 text-2xl leading-tight font-medium text-black">
              {selectedProduct.name}
            </h1>
            <p className="mt-1 text-gray-500">{selectedProduct.description}</p>
            <p className="mt-1">
              Brand: <strong>{selectedProduct.brand}</strong>
            </p>
            <hr />
            <div className="mt-3">
              <p className="mt-1 text-gray-900 text-2xl">${selectedProduct.price}</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <div className="text-center">
                <img src={img1} alt="Returnable" className="mx-auto" />
                <p className="text-gray-700 text-sm mt-2">15 days Returnable</p>
              </div>
              <div className="text-center">
                <img src={img2} alt="Free Delivery" className="mx-auto" />
                <p className="text-gray-700 text-sm mt-2">Free Delivery</p>
              </div>
              <div className="text-center">
                <img src={img3} alt="Secure Transaction" className="mx-auto" />
                <p className="text-gray-700 text-sm mt-2">Secure Transaction</p>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <label htmlFor={`quantity-${selectedProduct.id}`} className="mr-2">
                Quantity:
              </label>
              <select
                id={`quantity-${selectedProduct.id}`}
                value={selectedProduct.quantity}
                onChange={(e) => handleQuantity(parseInt(e.target.value))}
                className="border mt-4 border-gray-300 rounded px-2 py-1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4 space-y-4 p-3">
              <button
                className="w-full bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <Link to="/">
                <button className="w-full bg-gray-300 text-gray-800 px-4 py-2 mt-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                  Back to Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mr-[100%] p-5">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedProduct.reviews &&
              selectedProduct.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg p-8 text-center"
                >
                  <h3 className="flex items-center justify-center space-x-2 mt-4">{`Review ${
                    index + 1
                  }`}</h3>
                  <p className="text-xl font-light italic text-gray-700">
                    {review.comment}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4">
                    <div className="ml-2 flex">
                      {Array.from({ length: review.rating }, (i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0a1 1 0 0 1 .77.36l2.67 3.23 4.8.7a1 1 0 0 1 .55 1.7l-3.65 3.18 1.1 4.78a1 1 0 0 1-1.45 1.05L10 14.36l-4.56 2.72a1 1 0 0 1-1.45-1.05l1.1-4.78L.28 6.99a1 1 0 0 1 .55-1.7l4.8-.7L9.23.36A1 1 0 0 1 10 0z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {showAdd && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-700 mx-auto mb-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 4.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L8 13.586l8.293-8.293a1 1 0 0 1 1.414 0z"
                />
              </svg>
              <p className="text-gray-700">Product has been added to cart.</p>
              <div className="mt-6">
                <button
                  onClick={() => setShowAdd(false)}
                  className="bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
