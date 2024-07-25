import axiosInstance from "./request";

export const getCustom = (config?: any) => axiosInstance.get('customer', { params: config });

export const getNation = (config?: any) => axiosInstance.get('nation', { params: config });

export const getPartner = (config?: any) => axiosInstance.get('partner', { params: config });

export const getCity = (config?: any) => axiosInstance.get('city', { params: config });

export const getAgent = (config?: any) => axiosInstance.get('agent', { params: config });

export const getSchool = (config?: any) => axiosInstance.get('school', { params: config });

export const blockCustom = (url?: any) => axiosInstance.post(url);

export const changeCustom=(url?:any)=>axiosInstance.post(url)


export const configCustome = {
    navigate:"/customer",
    urlInfo: "",
    urlEdit: "customer",
    urlAdd: "customer",
    urlGetInfo:"customer",
    urlDelete:"banner?banner_id="
}