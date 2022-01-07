const url = 'https://api.discogs.com/database/search?token=FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta';
export const fetchProvider = {
    hostUrl: new URL(url),
    request: fetch 
} 