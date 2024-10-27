import axiosInterceptor from "../utils/axiosInterceptor";


export const apiGetproducts = (pagination, search) => {
    let apiUrl = `/eco/products/?`; // Base API URL
  
    // Add pagination parameters
    if (pagination) {
      const { page, rowsPerPage } = pagination; // Destructure pagination object
      apiUrl += `page=${page}&page_size=${rowsPerPage}&`;
    }
  
    // Add search parameter if provided
    if (search) {
      apiUrl += `search=${encodeURIComponent(search)}&`;
    }
  
    // Remove the trailing '&' if it exists
    apiUrl = apiUrl.replace(/&$/, "");
  
    return axiosInterceptor.get(apiUrl);
  };

  export const apiGetproductDetail = (id) => {
    const apiUrl = `/eco/products/${id}/`;
  
    return axiosInterceptor.get(apiUrl);
  };
  