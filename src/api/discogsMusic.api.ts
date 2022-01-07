export const getRecordsByArtist = (httpProvider: any) => (artist: string, page = 1) => {
    let params = httpProvider.hostUrl.searchParams
    params.set('per_page',10);
    params.set('q',artist);
    params.set('page',page);
    httpProvider.hostUrl.search = params.toString();
    return fetch(httpProvider.hostUrl).then((response: any) => response.json()); 
}