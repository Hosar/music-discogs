import { SearchResults, ArtistRecord } from './SearchResults';
import { render, screen, waitFor } from '@testing-library/react';
import { fakeMusicResults } from './fakeMusicResults';
import { WithSuspenseContract } from '../../Components/Common/WithSuspenseContract'
import { Suspense } from 'react';

function getArtistNoRecords() {
    return new Promise((resolve) => {
        resolve([]);
    });
}

function getArtistOneRecord() {
    return new Promise((resolve) => {
        resolve([fakeMusicResults.results[0]]);
    });
}

function getArtist50Record() {
    return new Promise((resolve) => {
        resolve([...fakeMusicResults.results]);
    });
}

const defaultLoading = <h1>Loading....</h1>;

describe('SearchResult', () => {
    test('given no records found, should show expected message', async () => {
        const artistRecordsFound = WithSuspenseContract(getArtistNoRecords());
        render(<Suspense fallback={defaultLoading}>
                <SearchResults artistRecordsFound={artistRecordsFound} />
               </Suspense>);

        expect(await screen.findByText(/No records found/i)).toBeInTheDocument()
    });
    
    test('given 1 record found, should show the info', async () => {
        const artistName = 'Vicente Fernandez';
        const artistRecordsFound = WithSuspenseContract(getArtistOneRecord());

        render(
            <Suspense fallback={defaultLoading}>
                <SearchResults artistRecordsFound={artistRecordsFound} />
            </Suspense>);

        expect(await screen.findByText(artistName)).toBeInTheDocument();
        expect(await screen.findAllByText(artistName)).toHaveLength(1);
        expect(await screen.findByAltText(artistName)).toBeInTheDocument();
    })
    
    test('given several records found, should show the elements', async () => {
        const artistRecordsFound = WithSuspenseContract(getArtist50Record());

        render(
            <Suspense fallback={defaultLoading}>
                <SearchResults artistRecordsFound={artistRecordsFound} />
            </Suspense>);
    
        expect(await screen.findAllByTestId('artist-records-found')).toHaveLength(50);
    })
})
