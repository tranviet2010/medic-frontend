import axiosInstance from "./request";

export const addProduct = (data: any) => axiosInstance.post('product', data);

export const getProduct = (config?: any) => axiosInstance.get('products', { params: { ...config, limit: 100 } })

export const getProductAll = (config?: any) => axiosInstance.get('products', { params: config })

