import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import { useDispatch, useSelector } from "react-redux";
import Notfound from '../assets/not.jpg'

import { login, logout } from "../Futers/LogInSlice";
import { setSearchTerm, setCategory, selectFilteredProducts , fetchProducts} from "../Futers/DataSlice";
import { Link } from 'react-router-dom';
function Datafilter() {
    const filteredProducts = useSelector(selectFilteredProducts);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);
    
  return (
    <><Nav></Nav>

<div className="container mx-auto mt-1 p-8">
    {filteredProducts.length >0?
    <>
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
          </>
          : <div className='flex justify-center  '>
            <img src={Notfound} alt="" srcset="" />
            </div>}
        </div>
    
    </>
  )
}

export default Datafilter