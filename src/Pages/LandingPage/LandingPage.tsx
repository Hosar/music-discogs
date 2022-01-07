import { useState } from 'react';
import { SearchInputForm } from '../../Components/SearchInputForm';
import { SearchResults } from '../../Components/SearchResults';
import { getRecordsByArtist } from '../../api/discogsMusic.api';
import { fetchProvider } from '../../api/fetchProvider';
import { ArtistRecord, Pagination } from '../../Components/SearchResults/SearchResults';
import { RequestError } from '../../Components/RequestError';

const searchRecordsByArtist = getRecordsByArtist(fetchProvider);

export function LandingPage() {
    const [artistRecords, setArtistRecords] = useState<ArtistRecord[]>();
    const [artistName, setArtistName] = useState('');
    const [paginationInfo, setPaginationInfo] = useState<Pagination>({page: 1});
    const [requestError, setRequestError] = useState('');
    
    const searchByArtist = async ({artistField}: {artistField: string}) => {
        console.log('Searching ....', artistField);
        let recordsFound;
        try {
            recordsFound = await searchRecordsByArtist(artistField);
            setArtistName(artistField);
            setArtistRecords(recordsFound.results);
            setPaginationInfo(recordsFound.pagination);
        } catch (error) {
            setRequestError('Error searching for artist');
            setArtistRecords(undefined);
        }
    }

    const handleNextPage = async (pageNumber: number) => {
        console.log('The page number 1', pageNumber);
        console.log('The page number 2', paginationInfo.page, paginationInfo.pages);
        console.log('-----> The artist', artistName);
        if(paginationInfo.page === paginationInfo.pages){
            console.log('No more records');
            return;
        }
        const recordsFound = await searchRecordsByArtist(artistName, paginationInfo.page + 1);
        setPaginationInfo(recordsFound.pagination);
        setArtistRecords((previousRecords: any) =>  {
           return [...previousRecords, ...recordsFound.results] 
        });
    }

    return (
        <div style={styles.container}>
            <SearchInputForm onSubmit={searchByArtist} />
            <SearchResults
                artistRecordsFound={artistRecords}
                paginationInfo={paginationInfo}
                handleNextPage={handleNextPage} />
            <RequestError errorMessage={requestError} />
        </div>       
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        minWidth: '20vw',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
