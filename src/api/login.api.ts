import axios from 'axios';

// const apiUrl = process.env.REACT_APP_API_LOGIN
const apiUrl = "http://172.104.189.80:3003/api/v1/auth/user/login"

export const LoginApi = (value: any) => {
    let config = {
        method: 'post',
        url: apiUrl,
        data:value
    };

    return axios.request(config)
        .then((response: any) => {
            return response
        })
        .catch((error: any) => {
            return error
        });
}