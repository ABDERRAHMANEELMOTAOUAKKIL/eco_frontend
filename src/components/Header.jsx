import React, { useState } from 'react';
import { apiSearchProducts } from '../services/search/api';
import SearchResults from './SearchResults';
const SearchComponent = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState(null); // Adjust based on your categories
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sortBy, setSortBy] = useState('created_at');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await apiSearchProducts(searchQuery, category, minPrice, maxPrice, sortBy);
        setResults(response.data.products.results); // Adjust based on your response structure
    } catch (error) {
        console.error("Error fetching search results:", error);
        setError("Failed to fetch results. Please try again.");

    } finally {
      setLoading(false);
  }
};

  return (
    <div className='container mx-auto px-4 pb-16'>

    <div className="flex flex-wrap pt-8 pb-10 items-center">
      <span className="font-semibold font-heading mb-10 lg:mb-0 mr-14">Search items:</span>
      <div className="flex mr-auto mb-10 lg:mb-0 items-center pl-8 bg-white rounded-lg">
        <span className="mr-3">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="auto-svg-8-4"
            >
            <path
              d="M17.5 17.6719L12.5042 12.4961"
              stroke="black"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
            <path
              d="M7.27524 14.4082C10.8789 14.4082 13.8002 11.486 13.8002 7.88134C13.8002 4.27666 10.8789 1.35449 7.27524 1.35449C3.67159 1.35449 0.750244 4.27666 0.750244 7.88134C0.750244 11.486 3.67159 14.4082 7.27524 14.4082Z"
              stroke="black"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
          </svg>
        </span>
        <input
          className="border-0 focus:ring-transparent focus:outline-none"
          value={searchQuery}
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}

          placeholder="Search"
          />
        <button 
        onClick={handleSearch} 
        className="inline-flex items-center justify-center w-12 h-12 bg-orange-300 hover:bg-orange-400 rounded-md">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="auto-svg-9-4"
            >
            <path
              d="M4.125 6.00252L0 1.87752L1.17801 0.699219L6.48102 6.00252L1.17801 11.3058L0 10.1275L4.125 6.00252Z"
              fill="white"
              />
          </svg>
        </button>
      </div>
        <div>
        {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results.length > 0 ? (
        <SearchResults products={results} />
      ) : (
        !loading && <p>No results found</p>
      )}
                {/* {results.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))} */}
            </div>
      <div className="flex space-x-2">
        {/* Facebook Icon */}
        <a className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full" href="#">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.122v-3.622h3.122v-2.672c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.591l-.467 3.622h-3.124v9.293h6.125c.729 0 1.324-.593 1.324-1.324v-21.351c0-.732-.595-1.325-1.326-1.325z" />
          </svg>
        </a>
        {/* Instagram Icon */}
        <a className="inline-flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full" href="#">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.241 1.317 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.241 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.241-1.317-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.342-2.633 1.317-3.608.975-.975 2.241-1.255 3.608-1.317 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.257 0-3.67.012-4.947.07-1.562.07-3.083.372-4.299 1.588-1.216 1.216-1.518 2.737-1.588 4.299-.058 1.276-.07 1.69-.07 4.947s.012 3.671.07 4.947c.07 1.562.372 3.083 1.588 4.299 1.216 1.216 2.737 1.518 4.299 1.588 1.276.058 1.69.07 4.947.07s3.671-.012 4.947-.07c1.562-.07 3.083-.372 4.299-1.588 1.216-1.216 1.518-2.737 1.588-4.299.058-1.276.07-1.69.07-4.947s-.012-3.671-.07-4.947c-.07-1.562-.372-3.083-1.588-4.299-1.216-1.216-2.737-1.518-4.299-1.588-1.276-.058-1.69-.07-4.947-.07z" />
            <path d="M12 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.999 3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
          </svg>
        </a>
        {/* Twitter Icon */}
        <a className="inline-flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full" href="#">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.843 9.843 0 0 1-3.127 1.196 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149 4.902 4.902 0 0 0 3.195 9.722a4.904 4.904 0 0 1-2.224-.616v.061a4.917 4.917 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.216.084 4.923 4.923 0 0 0 4.6 3.417A9.866 9.866 0 0 1 0 19.54a13.901 13.901 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.416 0-.219-.004-.436-.015-.653A10.245 10.245 0 0 0 24 4.557z" />
          </svg>
        </a>
      </div>
    </div>



              
              
  </div>
  );
};

export default SearchComponent;
