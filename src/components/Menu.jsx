import React from 'react';
import logo from '../images/logoipsum-255.png'; // Make sure the path is correct
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  const handleMobileMenuToggle = () => {
    const navbarMenu = document.querySelector('.navbar-menu');
    const close = document.querySelector('.navbar-close');
    const backdrop = document.querySelector('.navbar-backdrop');

    navbarMenu.classList.toggle('hidden');
    close.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
  };

  return (
    <nav className="relative flex justify-between bg-blue-900">
      {/* <a className="hidden xl:flex items-center px-12 border-r border-blue-200" href="#">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="white"></path>
          <path d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z" fill="white"></path>
          <path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="white"></path>
        </svg>
      </a> */}
      <div className="px-12 py-8 flex w-full items-center">
        <a className="flex-shrink-0 text-3xl font-bold" href="/">
          <img className="h-9" src={logo} alt="Logo" width="auto" />
        </a>
        <ul className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:items-center lg:w-auto">
        <Link 
          to="/categories" 
          className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold transition duration-200"
        >
          Category
        </Link>
          <li><a className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold transition duration-200" href="#">Collection</a></li>
          <li><a className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold transition duration-200" href="#">Story</a></li>
          <li><a className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold transition duration-200" href="#">Brand</a></li>
          <li><a className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold transition duration-200" href="#">Photos</a></li>
        </ul>
      </div>
      <div className="hidden xl:flex items-center justify-end mr-12">
        <a className="mr-10 text-white" href="#">
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
        <a className="flex items-center" href="#">
          <svg className="text-white mr-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span className="inline-block w-6 h-6 text-center bg-white rounded-full font-semibold text-dark">3</span>
        </a>
      </div>
      <a className="hidden xl:flex items-center px-12 border-l border-blue-200 font-semibold text-white" href="#">
        <svg className="mr-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span>Sign&nbsp;In</span>
      </a>
      <a className="xl:hidden flex mr-6 items-center text-white" href="#">
        <svg className="mr-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span className="text-white">Sign&nbsp;In</span>
      </a>
      <button className="xl:hidden flex mr-6 items-center text-white" onClick={handleMobileMenuToggle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.33333H20V6.66667H0V3.33333ZM0 8.33333H20V11.6667H0V8.33333ZM0 13.3333H20V16.6667H0V13.3333Z" fill="white"></path>
        </svg>
      </button>
      <div className='navbar-backdrop hidden fixed inset-0 bg-[#222] opacity-80 w-full z-[80]' onClick={handleMobileMenuToggle}></div>

      <div className="bg-white hidden navbar-menu fixed top-0 left-0 w-full md:w-[350px] h-full z-[100]">
      <div className='relative px-9 pt-8 bg-white h-full overflow-y-auto'>
        <div className='w-full'>

        
        <div className='flex items-center justify-between -m-2'>

      <div className="w-auto p-2">
              <a className="inline-block up-current" href="/" aria-current="page">
                <img src={logo} alt="img" className="w-40"/>
                </a>
            </div>

        <div className="w-auto p-2">
              <button className="navbar-close" onClick={handleMobileMenuToggle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
        </div>
        </div>
        <div className="flex flex-col justify-center py-16 w-full">
        <ul>
        <Link 
          to="/categories" 
          className="mb-5"
        >
          Category
        </Link>
          <li className="mb-5"><a  href="#">Collection</a></li>
          <li className="mb-5"><a href="#">Story</a></li>
          <li className="mb-5"><a  href="#">Brand</a></li>
          <li className="mb-5"><a  href="#">Photos</a></li>
        </ul>
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
