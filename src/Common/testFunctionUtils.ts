import { number } from 'yup/lib/locale';
import { fakeMusicResults } from './fakeMusicResults';
export function getArtistNoRecords() {
    return [];
}

export function getArtistOneRecord() {
    return [fakeMusicResults.results[0]];
}

export function getArtist50Record() {
    return [...fakeMusicResults.results];
}

export const paginationInfo = {
        "page": 1,
        "pages": 191,
        "per_page": 10,
        "items": 1903,
        "urls": {
            "last": "https://api.discogs.com/database/search?q=Hector+Lavoe&per_page=10&page=191&z=&token=FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta",
            "next": "https://api.discogs.com/database/search?q=Hector+Lavoe&per_page=10&page=2&z=&token=FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta"
        }
}

export const handleNextPage = (pageNumber: number) => {
        console.log(number);
}