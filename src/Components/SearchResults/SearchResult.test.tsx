import { SearchResults } from './SearchResults';
import { render, screen } from '@testing-library/react';
import { getArtistNoRecords,
    getArtistOneRecord,
    getArtist50Record,
    paginationInfo,
    handleNextPage } from '../../Common/testFunctionUtils';

const defaultLoading = <h1>Loading....</h1>;


// test('given a request should show Loading while resolving', async () => {
//     const artistRecordsFound = getArtistNoRecords();
//     render(<SearchResults paginationInfo={paginationInfo} 
//                     artistRecordsFound={artistRecordsFound}
//                     handleNextPage={handleNextPage} />);

//     expect(screen.getByText(/Loading..../i)).toBeInTheDocument()
// });

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    });
    window.IntersectionObserver = mockIntersectionObserver;
})

test('given no records found, should show expected message', async () => {
    const artistRecordsFound = getArtistNoRecords();
    render(<SearchResults
                isLoading={false} 
                paginationInfo={paginationInfo} 
                handleNextPage={handleNextPage}
                artistRecordsFound={artistRecordsFound} />);

    expect(await screen.findByText(/No records found/i)).toBeInTheDocument()
});

test('given 1 record found, should show the info', async () => {
    const artistName = 'Vicente Fernandez';
    const artistRecordsFound = getArtistOneRecord();
    

    render(<SearchResults
            isLoading={false}
            paginationInfo={paginationInfo} 
            handleNextPage={handleNextPage}
            artistRecordsFound={artistRecordsFound} />);

    expect(await screen.findByText(artistName)).toBeInTheDocument();
    expect(await screen.findAllByText(artistName)).toHaveLength(1);
    expect(await screen.findByAltText(artistName)).toBeInTheDocument();
})

test('given several records found, should show the elements', async () => {
    const artistRecordsFound = getArtist50Record();
    render(<SearchResults 
            isLoading={false}
            paginationInfo={paginationInfo} 
            handleNextPage={handleNextPage} artistRecordsFound={artistRecordsFound} />);

    expect(await screen.findAllByTestId('artist-records-found')).toHaveLength(50);
})
