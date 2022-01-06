import { Axios } from 'axios';

export const getRecordsByArtist = (httpProvider: Axios) => (artist: string) => {
    return httpProvider.get(`database/search?q=${artist}&type=artist`);
}