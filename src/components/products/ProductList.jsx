import React, { useEffect, useState } from 'react';
import { apiGetproducts } from '../../services/products/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(0); // State for total pages

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiGetproducts({ page: currentPage, rowsPerPage: 10 }); // Adjust rowsPerPage as needed
      setProducts(response.data.results); // Update this based on your response structure
      setTotalPages(Math.ceil(response.data.count / 10)); // Adjust according to your pagination logic
    } catch (error) {
      setError(error.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products whenever the page changes
  }, [currentPage]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24" key={product.id}>
            <div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
              <a className="block mx-auto max-w-max" href="#" data-path={`0.0.0.3.0.0.0`}>
                <img
                  className="h-40 object-cover"
                  src={product.image} // Use your utility function to get the correct image URL
                  alt={product.name} // Use product name for accessibility
                  data-config-id={`img-${product.id}`}
                />
              </a>
            </div>
            <a href="#" data-path={`0.0.0.3.0.1`}>
              <p className="mb-4 text-l leading-8 font-heading font-medium hover:underline">
                {product.name}
              </p>
            </a>
            <p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
              <span className="text-base pr-2">$</span>
              <span>{product.price}</span>
            </p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProductList;
