import { Axios } from 'axios';
import * as request from 'superagent';

export const getRecordsByArtist = (httpProvider: any) => (artist: string, page = 1) => {
    // const url = 'https://api.discogs.com/database/search';
    console.log('...............>', artist);
    console.log('...............>', httpProvider);
    // httpProvider.hostUrl.pathName = 'database/search';
    // const theQuery = httpProvider.query(`q=${artist}`)
    // console.log(theQuery);
    // const url = new URL('https://api.discogs.com/database/search')
    let params = httpProvider.hostUrl.searchParams
    params.set('per_page',10);
    params.set('q',artist);
    params.set('page',page);
    httpProvider.hostUrl.search = params.toString();
    console.log('httpProvider.hostUrl', httpProvider.hostUrl)
    console.log('httpProvider.hostUrl', httpProvider.hostUrl.href)
    // return fetch(httpProvider.hostUrl).then((response: any) => response.json());
    return fetch(httpProvider.hostUrl).then((response: any) => response.json()); 
}



// export const getRecordsByArtist = (httpProvider: Axios) => (artist: string) => {
//     return httpProvider.get(`database/search?q=${artist}&type=artist&token=FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta`);
// }