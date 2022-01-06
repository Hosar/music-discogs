import { Axios } from 'axios';
import { env } from '../../Common/constants';

export const axiosProvider = new Axios({
    baseURL: env.DISCOGS_BASE_URL,
});

axiosProvider.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        token: env.DISCOGS_TOKEN,
    }
    return config;
});
