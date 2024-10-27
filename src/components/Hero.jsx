import React from 'react';
import image1 from '../images/women.png'; // Make sure the path is correct
import image2 from '../images/placeholder1.png'; // Make sure the path is correct
import image3 from '../images/placeholder2.png'; // Make sure the path is correct


const Hero = () => {
    return (
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-8/12 px-4 mb-6 lg:mb-0">
          <div className="relative h-full bg-white overflow-hidden">
            <img
              className="absolute right-0 top-0 w-1/2 h-full object-cover"
              src={image1}
              alt=""
              data-config-id="auto-img-1"
            />
            {/* <div className="hidden lg:flex absolute right-0 top-1/2 pr-10 transform -translate-y-1/2 flex-col items-center">
              <span className="mb-5 font-bold font-heading">01</span>
              <div className="mb-5 h-16 w-px bg-gray-100"></div>
              <button className="mb-5">
                <img src="yofte-assets/elements/circle.svg" alt="" data-config-id="auto-img-2" />
              </button>
              <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
              <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
              <div className="h-16 w-px bg-gray-100"></div>
            </div> */}
            <div className="relative max-w-xl pl-6 lg:pl-20 pt-32 pb-24">
              <span
                className="px-3 py-1 border border-blue-500 rounded-full text-xs text-blue-500 font-bold font-heading uppercase"
                data-config-id="label"
              >
                Bestseller
              </span>
              <h2 className="mt-6 mb-8 text-5xl lg:text-6xl font-bold font-heading">
                <span data-config-id="h-p1">Don’t stop.</span>
                <span className="text-blue-500" data-config-id="h-p2">
                  Create
                </span>
                <span data-config-id="h-p3">yourself.</span>
              </h2>
              <p className="mb-20 text-lg text-gray-600" data-config-id="desc">
                Discover more products and inspiration.
              </p>
              <a
                className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                href="#"
                data-config-id="primary-action"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <a href="#">
            <img className="mb-6" src={image2} alt="" data-config-id="pr1-banner" />
          </a>
          <a href="#">
            <img src={image3} alt="" data-config-id="pr2-banner" />
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;
  