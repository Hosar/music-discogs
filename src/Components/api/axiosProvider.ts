import { Axios } from 'axios';

export const axiosProvider = new Axios({
    baseURL: 'https://api.discogs.com/'
});

axiosProvider.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        token: 'FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta'
    }
    return config;
});
