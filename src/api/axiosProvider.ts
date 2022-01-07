import axios  from 'axios';
import { env } from '../Common/constants';

export const axiosProvider = axios({
    baseURL: env.DISCOGS_BASE_URL,
    // headers: {
    //     'User-Agent': 'PostmanRuntime/7.28.4',
    //     'Content-Type': 'application/json',
    //      Accept: 'application/json',
    //     'Accept-Encoding': 'gzip, deflate, br',
    //     'Connection': 'keep-alive',
    //     // 'Content-Type': 'application/vnd.api+json',
    // },
    // data: {},
});

// axiosProvider.interceptors.request.use((config) => {
//     config.params = {
//         ...config.params,
//         token: env.DISCOGS_TOKEN,
//     }
//     return config;
// });
