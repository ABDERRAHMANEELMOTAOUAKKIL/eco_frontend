import React from 'react';

const SearchResults = ({ products }) => {
    return (
        <div data-section-id="2" data-share="" data-category="product-list" data-component-id="e99f8443_10_awz" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
                    <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0">
                        <h2 className="text-5xl font-bold font-heading">
                            <span data-config-id="header">Found {products.length} results for</span>
                            <a className="relative text-blue-300 underline" href="#" data-config-id="cat">{products}</a>
                        </h2>
                    </div>
                </div>
                
                <div className="w-full lg:w-3/4 px-3">
                    {products.map((product, index) => (
                        <div key={index} className="relative mb-6 bg-gray-50">
                            <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500" data-config-id={`badge${index + 1}`}>-{product.discount}%</span>
                            <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                                    <a href="#">
                                        <img className="mx-auto md:mx-0 w-40 h-52 object-contain" src={product.image} alt={product.title} data-config-id={`image${index + 1}`} />
                                    </a>
                                </div>
                                <div className="w-full md:w-3/4 px-4">
                                    <a className="block mb-8" href="#">
                                        <h3 className="mb-2 text-xl font-bold font-heading" data-config-id={`title${index + 1}`}>{product.title}</h3>
                                        <p className="mb-6 text-lg font-bold font-heading text-blue-500">
                                            <span data-config-id={`price${index + 1}`}>${product.price}</span>
                                            <span className="text-xs text-gray-500 font-semibold font-heading line-through" data-config-id={`price${index + 1}-old`}>${product.oldPrice}</span>
                                        </p>
                                        <p className="max-w-md text-gray-500" data-config-id={`desc${index + 1}`}>{product.description}</p>
                                    </a>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <a className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase" href="#" data-config-id={`action${index + 1}`}>Add to cart</a>
                                        <div className="ml-auto">
                                            <a className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500" href="#">
                                                {/* Heart SVG */}
                                            </a>
                                            <a className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500" href="#">
                                                {/* Compare SVG */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
