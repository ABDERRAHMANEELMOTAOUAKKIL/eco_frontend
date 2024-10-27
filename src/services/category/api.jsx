import axiosInterceptor from "../utils/axiosInterceptor";


export const apiGetCategories = () => {
    const apiUrl = `/eco/categories/`;
    return axiosInterceptor.get(apiUrl);
  };

export const apiGetCategoryProducts = (category_id) => {
    const apiUrl = `/eco/categories/${category_id}/products/`; // Update the URL to include /products/
    return axiosInterceptor.get(apiUrl);
  };
  
  