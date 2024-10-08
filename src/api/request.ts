// src/axiosInstance.ts
import axios, { AxiosRequestConfig, Method } from 'axios';
import store from '../stores';
import { setGlobalState } from '../stores/global.store';
import { message as $message } from 'antd'
import Notifi from '../components/core/noti';


const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE,
    // baseURL: "http://localhost:198/api/v1/",
    baseURL: "http://172.104.189.80:198/api/v1/",
    timeout: 1000,
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    store.dispatch(
        setGlobalState({
            loading: true,
        })
    )
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})


axiosInstance.interceptors.response.use(
    (config) => {
        store.dispatch(
            setGlobalState({
                loading: false,
            })
        )
        return config
    },
    (error) => {
        store.dispatch(
            setGlobalState({
                loading: false,
            })
        )

        if (error?.response?.data?.code == 'USER_00001') {
            Notifi('error', "Số điện thoại đã được dùng đăng ký tài khoản");
            return
        }
        let errorMessage = 'Lỗi hệ thống'
        if (error?.code == "ERR_BAD_REQUEST") {
            errorMessage = error?.response?.data?.message
            Notifi('error', errorMessage);
            return
        }
        if (error?.message?.includes('Network Error')) {
            errorMessage = 'Lỗi mạng, vui lòng thử lại'
        } else {
            errorMessage = 'Lỗi hệ thống'
        }

        // console.dir(error);
        if (error.message) $message.error(errorMessage)

        return {
            status: false,
            message: error?.response?.data?.message,
            result: null,
        }
    }
)


export default axiosInstance;


export const addFormData = (url: any, data: any) => axiosInstance.post(url, data);
export const editFormRequest = (url: any, data: any) => axiosInstance.put(url, data);
export const deleteFormRequest = (url: any, data: any) => axiosInstance.delete(url, data);
export const getParam = () => axiosInstance.get('ap_params', { params: { limit: 100 } })



export const getInfoFeNo = (url:any) => axiosInstance.get(url);
export const postInfo = (url:any,data:any) => axiosInstance.post(url,data);
