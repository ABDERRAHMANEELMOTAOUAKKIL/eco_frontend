import React from "react";

const Footer = () => {
  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center pb-6 lg:pb-16 border-b border-gray-400">
          <div className="w-full lg:w-3/5 px-4 mb-20">
            <div className="flex flex-wrap justify-center text-center -mx-4">
              {/* Information Section */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                <h3 className="mb-8 text-xl font-bold font-heading text-white">Information</h3>
                <ul>
                  {["Newsroom", "Story", "Investor Relations", "Reward program", "Delivery information", "Paying by invoice"].map((link, index) => (
                    <li className="mb-6" key={index}>
                      <a className="text-gray-50 hover:text-gray-200" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Customer Service Section */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                <h3 className="mb-8 text-xl font-bold font-heading text-white">Customer Service</h3>
                <ul>
                  {["Return an order", "Search Terms", "Advanced Search", "Orders and Returns", "FAQs", "Store Location", "Contact Us"].map((link, index) => (
                    <li className="mb-6" key={index}>
                      <a className="text-gray-50 hover:text-gray-200" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Us Section */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <h3 className="mb-8 text-xl text-white font-bold font-heading">Contact Us</h3>
                <ul>
                  <li className="mb-6">
                    <h4 className="mb-2 text-gray-50">Mobile</h4>
                    <a className="text-white hover:underline" href="#">+39 4097 533 32 331</a>
                  </li>
                  <li className="mb-6">
                    <h4 className="mb-2 text-gray-50">Email</h4>
                    <a className="text-white hover:underline" href="#">lorem@morem.com</a>
                  </li>
              
                </ul>
              </div>
            </div>
          </div>

          {/* Social and Payment Icons */}
          <div className="w-full px-4 flex flex-wrap justify-center lg:order-last mb-4">
            <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
              {["visa.svg", "paypal.svg", "mastercard.svg"].map((icon, index) => (
                <img className="mr-4 mb-2" src={`yofte-assets/brands/${icon}`} alt="" key={index} />
              ))}
            </div>
            <div className="w-full md:w-auto flex justify-center">
              {["facebook-white-circle.svg", "instagram-circle.svg", "twitter-circle.svg"].map((icon, index) => (
                <a className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full" href="#" key={index}>
                  <img src={`yofte-assets/buttons/${icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-14 flex items-center justify-center">
          <a className="inline-block mr-4 text-white text-2xl font-bold font-heading" href="#">
            <img className="h-7" src="yofte-assets/logos/yofte-logo-white.svg" alt="" width="auto" />
          </a>
          <p className="inline-block text-sm text-gray-200">© Copyright 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
