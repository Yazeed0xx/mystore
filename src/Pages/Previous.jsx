import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function PreviousOrders() {
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    axios
      .get(`https://6685a3abb3f57b06dd4d6580.mockapi.io/signup/${userid}`)
      .then((res) => {
        console.log(res.data.cart);
        setOrders(res.data.cart);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleOrderClick = (orderId) => {};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Previous Orders</h1>
      </div>
      <div className="flex">
        <div className="w-full p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Order Total</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((orders) => (
                <tr key={orders.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    <img className="w-24" src={orders.image} alt="" srcset="" />
                  </td>
                  <td className="py-2 px-4 border-b">{orders.id}</td>
                  <td className="py-2 px-4 border-b">{orders.price} </td>
                  <td className="py-2 px-4 border-b">
                    {/* <button
                      onClick={() => handleOrderClick(orders.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Details
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default PreviousOrders;
