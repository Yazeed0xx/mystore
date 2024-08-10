import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdCarousel = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    axios
      .get("https://6685a3abb3f57b06dd4d6580.mockapi.io/products")
      .then((res) => {
        setElements(res.data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex justify-center my-8">
      <div className="w-full  max-w-md  mt-8">
        <Slider {...settings}>
          {elements.map((item) => (
            <div key={item.id} className="p-4 felx ">
              <div className="bg-white h-48 flex flex-col items-center justify-center rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-full mb-4"
                />
                <div className="text-gray-800 font-bold text-lg">
                  {item.name}
                </div>
                <div className="text-gray-600">${item.price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AdCarousel;
