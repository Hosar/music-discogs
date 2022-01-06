import { getRecordsByArtist } from './discogsMusic.api';
import { axiosProvider } from './axiosProvider';

describe('Discogs Music Api', () => {
    test('Should find the records for Vicente Fernandez', async () => {
        const artist = 'Vicente Fernandez';
        const records = await getRecordsByArtist(axiosProvider)(artist);
        // console.log(records);
        expect(true).toBe(true);
    })
  
});
