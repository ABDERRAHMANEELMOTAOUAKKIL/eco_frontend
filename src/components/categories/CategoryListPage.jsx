import React, { useState, useEffect } from 'react';
import { apiGetCategories } from '../../services/category/api';
import { Link } from 'react-router-dom'; // Import Link

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await apiGetCategories();
          const categoriesData = Array.isArray(response.data) ? response.data :
                                 response.data?.results ? response.data.results :
                                 response.data?.categories ? response.data.categories : 
                                 [];
          setCategories(categoriesData);
        } catch (err) {
          setError('Failed to load categories');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);

    if (loading) {
        return (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin"></div>
          </div>
        );
      }
    
    if (error) {
        return (
          <div className="text-center text-red-500 p-4">
            {error}
          </div>
        );
      }
      return (
        <div className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6">All Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`} // Link to CategoryProducts page
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4">
                  <div className="aspect-square relative mb-3">
                    <img
                      src={category.image || "/api/placeholder/400/400"}
                      alt={category.name}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      );
};
export default CategoriesPage;
