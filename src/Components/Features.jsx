import React from 'react';
import img from '../assets/reliability.png'
import img1 from '../assets/reward.png'
import img2 from '../assets/customer-review.png'


function Features() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-500 py-6 sm:py-12">
    <h1 className="text-center text-white text-2xl font-bold mb-6 sm:mb-12">WHY WE?</h1>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {/* First Card */}
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-sm rounded-lg">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto text-left">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:bg-sky-400">
            <img src={img1} className='w-[50px]' alt="Icon 1"/>
          </span>
          <div className="space-y-6 pt-5 font-bold leading-7 text-black transition-all duration-300 group-hover:text-white/90">
            <p>Competitive prices.</p>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-sm rounded-lg">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto text-left"> 
          <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:bg-sky-400">
            <img src={img} className='w-[50px]' alt="Icon 2"/>
          </span>
          <div className="space-y-6 pt-5 font-bold leading-7 text-black transition-all duration-300 group-hover:text-white/90">
            <p>High quality.</p>
          </div>
        </div>
      </div>
      {/* Third Card */}
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-sm rounded-lg">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto text-left">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:bg-sky-400">
            <img src={img2} className='w-[50px]' alt="Icon 3"/>
          </span>
          <div className="space-y-6 pt-5 font-bold leading-7 text-black transition-all duration-300 group-hover:text-white/90">
            <p>Excellent customer service to ensure your complete satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Features;
