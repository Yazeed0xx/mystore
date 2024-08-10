import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const userid = localStorage.getItem("userid");
  const nav = useNavigate();
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const checkout = () => {
    axios
      .put(`https://6685a3abb3f57b06dd4d6580.mockapi.io/signup/${userid}`, {
        cart,
        total,
      })
      .then(() => {
        nav("/orders");
      });
  };

  return (
    <>
      <div className="">
        <Nav />
      </div>
      <div className="container mx-auto p-4">
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center mb-4"
                  >
                    <img
                      src={item.image}
                      className="w-24 h-24 object-cover mr-4"
                      alt={item.title}
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">
                        {item.quantity} x ${item.price}
                      </p>
                      <div className="mt-2 flex items-center">
                        <label htmlFor={`quantity-${item.id}`} className="mr-2">
                          Quantity:
                        </label>
                        <select
                          id={`quantity-${item.id}`}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantity(item.id, parseInt(e.target.value))
                          }
                          className="border border-gray-300 rounded px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <button
                          className=" text-black px-3 py-1 rounded ml-2"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="grid  w-full grid-cols-1 lg:grid-cols-3 gap-4 py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                  <div className="mx-auto w-full max-w-lg">
                    <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                      Secure Checkout
                      <span className="mt-2 block h-1 w-10  sm:w-20"></span>
                    </h1>
                    <form action="" className="mt-10 flex flex-col space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold text-gray-500"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="example@gmil.com"
                          className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 "
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="card-number"
                          className="text-xs font-semibold text-gray-500"
                        >
                          Card number
                        </label>
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          placeholder="1234-5678-XXXX-XXXX"
                          className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 "
                        />
                        <img
                          src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                          alt=""
                          className="absolute bottom-3 right-3 max-h-4"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500">
                          Expiration date
                        </p>
                        <div className="mr-6 flex flex-wrap">
                          <div className="my-1">
                            <label htmlFor="month" className="sr-only">
                              Select expiration month
                            </label>
                            <select
                              name="month"
                              id="month"
                              className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 "
                            >
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                              <option value="">4</option>
                              <option value="">6</option>
                              <option value="">7</option>
                              <option value="">8</option>
                              <option value="">9</option>
                              <option value="">10</option>
                              <option value="">11</option>
                              <option value="">12</option>

                              {/* Add month options */}
                            </select>
                          </div>
                          <div className="my-1 ml-3 mr-6">
                            <label htmlFor="year" className="sr-only">
                              Select expiration year
                            </label>
                            <select
                              name="year"
                              id="year"
                              className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 "
                            >
                              <option value="">Year</option>
                              <option value="">2024</option>
                              <option value="">2025</option>
                              <option value="">2026</option>
                              <option value="">2027</option>

                              {/* Add year options */}
                            </select>
                          </div>
                          <div className="relative my-1">
                            <label htmlFor="security-code" className="sr-only">
                              Security code
                            </label>
                            <input
                              type="text"
                              id="security-code"
                              name="security-code"
                              placeholder="Security code"
                              className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 "
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="card-name" className="sr-only">
                          Card name
                        </label>
                        <input
                          type="text"
                          id="card-name"
                          name="card-name"
                          placeholder="Name on the card"
                          className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 "
                        />
                      </div>
                    </form>
                    <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                      By placing this order you agree to the{" "}
                      <a
                        href="#"
                        className="whitespace-nowrap text-black underline hover:text-black"
                      >
                        Terms and Conditions
                      </a>
                    </p>
                    <button
                      type="button"
                      onClick={checkout}
                      className="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-700 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-white p-6 rounded-lg w-[400px] h-[200px] shadow-md">
                  <h3 className="text-xl dark:text-black font-semibold leading-5 text-black">
                    Summary
                  </h3>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between">
                      <p className="text-base dark:text-black text-black">
                        Subtotal
                      </p>
                      <p className="text-base">${total.toFixed(2)}</p>
                    </div>
                    {/* Replace with your discount and shipping logic */}
                    <div className="flex justify-between">
                      <p className="text-base dark:text-black text-black">
                        Discount{" "}
                        <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-black text-black">
                          STUDENT
                        </span>
                      </p>
                      <p className="text-base dark:text-black text-gray-600">
                        -$28.00 (50%)
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base dark:text-black text-black">
                        Shipping
                      </p>
                      <p className="text-base dark:text-black text-black">
                        $8.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base dark:text-black font-semibold">
                      Total
                    </p>
                    <p className="text-base font-semibold">
                      ${(total - 28 + 8).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Shipping Section */}
                <div className="bg-white text-black w-[400px] dark:bg-white-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl dark:text-black font-semibold leading-5 text-gray-800">
                    Shipping
                  </h3>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8">
                        <img
                          className="w-full h-full"
                          alt="logo"
                          src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                        />
                      </div>
                      <div>
                        <p className="text-lg dark:text-black font-semibold text-gray-800">
                          DHL Delivery
                          <br />
                          <span className="font-normal">
                            Delivery within 24 Hours
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg dark:text-black font-semibold text-gray-800">
                      $8.00
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-800 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 hover:bg-black text-black py-2 px-4 rounded w-full">
                      View Carrier Details
                    </button>
                  </div>
                </div>

                {/* Customer Section */}
                <div className="bg-gray-50 dark:bg-white p-6 w-[400px] rounded-lg shadow-md">
                  <h3 className="text-xl dark:text-black font-semibold leading-5 text-gray-800">
                    Customer
                  </h3>
                  <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                    <img src="" alt="avatar" />
                    <div>
                      <p className="text-base dark:text-black font-semibold text-gray-800">
                        Username placeholder
                      </p>
                      <p className="text-sm">10 Previous Orders</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L12 13L21 7"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="cursor-pointer text-sm dark:text-black text-gray-800">
                      email placeholder
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <p className="text-base dark:text-black font-semibold text-gray-800">
                        Shipping Address
                      </p>
                      <p className="text-sm text-gray-600">Riyadh,</p>
                    </div>
                    {/* Add more customer details as needed */}
                  </div>
                  <button className="bg-white dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 hover:bg-black text-black py-2 px-4 rounded w-full">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Checkout Section */}
    </>
  );
};

export default Cart;
