import React from 'react';
import partner1 from '../images/exxon.svg'; 
import partner2 from '../images/ea-sports.svg'; 
import partner3 from '../images/eurosport.svg'; 
import partner4 from '../images/nike.svg'; 
import partner5 from '../images/aol.svg'; 
import partner6 from '../images/north-face.svg'; 


const TrustedBrands = () => {
    return (
      <div className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h4
            className="lg:ml-16 mb-6 font-bold font-heading text-gray-500 text-xs"
            data-config-id="logos-header"
          >
            TRUSTED BY BRANDS ALL OVER THE WORLD
          </h4>
          <div className="flex flex-wrap -mx-3 -mb-3">
            <div className="w-full md:w-1/2 lg:w-1/6 p-3">
              <div className="h-28 flex items-center bg-white shadow-xl">
                <img
                  className="mx-auto"
                  src={partner1}
                  alt="img"
                  data-config-id="logo1"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 p-3">
              <div className="h-28 flex items-center bg-white shadow-xl">
                <img
                  className="mx-auto"
                  src={partner2}
                  alt="img"
                  data-config-id="logo2"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 p-3">
              <div className="h-28 flex items-center bg-white shadow-xl">
                <img
                  className="mx-auto"
                  src={partner3}
                  alt=""
                  data-config-id="logo3"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 p-3">
              <div className="h-28 flex items-center bg-white shadow-xl">
                <img
                  className="mx-auto"
                  src={partner4}
                  alt=""
                  data-config-id="logo4"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 p-3">
              <div className="h-28 flex items-center bg-white shadow-xl">
                <img
                  className="mx-auto"
                  src={partner5}
                  alt=""
                  data-config-id="logo5"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 p-3">
              <div className="h-28 flex items-center bg-white shadow-xl">
                <img
                  className="mx-auto"
                  src={partner6}
                  alt=""
                  data-config-id="logo6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrustedBrands;
  