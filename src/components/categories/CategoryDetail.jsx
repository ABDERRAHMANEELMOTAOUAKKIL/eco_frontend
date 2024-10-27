import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiGetCategoryProducts } from '../../services/category/api';

const CategoryProducts = () => {
    const { category_id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize the navigate function


    const API_BASE_URL = 'http://127.0.0.1:8000'; // Add your backend URL here

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiGetCategoryProducts(category_id);
                console.log('API Response:', response.data);
                setProducts(response.data);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category_id]);

    // Helper function to get the correct image URL
    const getImageUrl = (imageUrl) => {
        if (!imageUrl) return "/api/placeholder/400/400";
        
        // If it's already a full URL, return as is
        if (imageUrl.startsWith('http')) {
            return imageUrl;
        }
        
        // If it's a relative path, append it to the API base URL
        return `${API_BASE_URL}${imageUrl}`;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Products in this Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => navigate(`/eco/products/${product.id}/`)} // Navigate on click

                    >
                        <div className="p-4">
                            <div className="aspect-square relative mb-3">
                                <img
                                    src={getImageUrl(product.image)}
                                    alt={product.name}
                                    className="object-cover rounded-lg w-full h-full"
                                    onError={(e) => {
                                        console.log('Image failed to load:', e.target.src);
                                        e.target.src = "/api/placeholder/400/400";
                                    }}
                                />
                            </div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                            <p className="font-bold text-lg">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;