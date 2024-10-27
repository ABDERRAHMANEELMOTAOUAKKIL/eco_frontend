import axiosInterceptor from "../utils/axiosInterceptor";

export const apiSearchProducts = (query, category_id = null, min_price = null, max_price = null, sort_by = 'created_at') => {
    const apiUrl = `/eco/search`;

    // Construct the query parameters
    const params = {
        q: query,
        category: category_id,
        min_price: min_price,
        max_price: max_price,
        sort_by: sort_by,
    };

    return axiosInterceptor.get(apiUrl, { params });
};