import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetproductDetail } from '../../services/products/api'; // Adjust the import path as needed

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await apiGetproductDetail(id);
                console.log('Product Detail Response:', response.data);
                setProduct(response.data);
            } catch (err) {
                console.error('Error fetching product detail:', err);
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

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

    if (!product) {
        return <div>No product found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover rounded-lg w-full h-full"
                        onError={(e) => {
                            console.log('Image failed to load:', e.target.src);
                            e.target.src = "/api/placeholder/400/400"; // Placeholder image
                        }}
                    />
                </div>
                
                <div className="md:w-1/2 md:pl-4">
                    <div className="mb-10 pb-10 border-b">
                        <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading">{product.name}</h2>
                        <p className="text-gray-600 text-lg mb-2">{product.description}</p>
                        <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-900">${product.price}</p>
                    </div>

                    {/* Add to Cart and Wishlist Section */}
               

                    <div className="flex mb-12">
                        <div className="mr-6">
                            <span className="block mb-4 font-bold font-heading text-gray-400 uppercase" data-config-id="label1">QTY</span>
                            <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                <button className="py-2 hover:text-gray-700">
                                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-2">
                                        <g opacity="0.35">
                                            <rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect>
                                        </g>
                                    </svg>
                                </button>
                                <input
                                    className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                                    type="number"
                                    placeholder="1"
                                />
                                <button className="py-2 hover:text-gray-700">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-6-2">
                                        <g opacity="0.35">
                                            <rect x="5" width="2" height="12" fill="currentColor"></rect>
                                            <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="block mb-4 font-bold font-heading text-gray-400 uppercase" data-config-id="label2">Size</span>
                            <select className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                <option value="1">Medium</option>
                                <option value="2">Small</option>
                                <option value="3">Large</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-14 items-center">
    <div className="w-full lg:w-1/2">
        <a
            className="block mb-4 lg:mb-0 lg:mr-6 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
            href="#"
            data-config-id="primary-action"
        >
            Add to cart
        </a>
    </div>
    <div className="w-full lg:w-1/2">
        <a className="block flex items-center justify-center mb-4 lg:mb-0 bg-blue-400 hover:bg-blue-500 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
            href="#"
            data-config-id="secondary-action"
        >
            <svg
                className="mr-2"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
            Add to wishlist
        </a>
    </div>
</div>


                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;
