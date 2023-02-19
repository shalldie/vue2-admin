import axios from 'axios';
import { Notification } from 'element-ui';

const instance = axios.create({
    baseURL: '/api/'
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
        // 状态码异常造成的错误
        Notification.error({
            title: `${error.code}(${error.response?.status})`,
            message: error.response?.data || error.message || '服务器错误'
        });

        return Promise.reject(error);
    }
);

export const http = {
    async get(method, payload = {}) {
        const { data } = await instance.get(method, {
            params: payload
        });
        return data;
    },
    async post(method, payload = {}) {
        const { data } = await instance.post(method, payload);
        return data;
    }
};
