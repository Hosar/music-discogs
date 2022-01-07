import { useState } from 'react';
import { SearchInputForm } from '../../Components/SearchInputForm';
import { SearchResults } from '../../Components/SearchResults';
import { getRecordsByArtist } from '../../api/discogsMusic.api';
import { fetchProvider } from '../../api/fetchProvider';
import { ArtistRecord, Pagination } from '../../Common/interfaces';
import { RequestError } from '../../Components/RequestError';

const searchRecordsByArtist = getRecordsByArtist(fetchProvider);

export function LandingPage() {
    const [artistRecords, setArtistRecords] = useState<ArtistRecord[]>([]);
    const [artistName, setArtistName] = useState('');
    const [paginationInfo, setPaginationInfo] = useState<Pagination>({page: 1});
    const [requestError, setRequestError] = useState('');
    const [isLoading, setIsLoading ] = useState(false);
    
    const searchByArtist = async ({artistField}: {artistField: string}) => {
        let recordsFound;
        setIsLoading(true);
        setArtistRecords([]);
        try {
            recordsFound = await searchRecordsByArtist(artistField);
            setArtistName(artistField);
            setArtistRecords(recordsFound.results);
            setPaginationInfo(recordsFound.pagination);
            setIsLoading(false);
        } catch (error) {
            setRequestError('Error searching for artist');
            setArtistRecords([]);
            setIsLoading(false);
        }
    }

    const handleNextPage = async (pageNumber: number) => {
        if(paginationInfo.page === paginationInfo.pages){
            console.log('No more records');
            return;
        }
        setIsLoading(true);
        let recordsFound: {results: ArtistRecord[], pagination: Pagination};
        try {
            recordsFound = await searchRecordsByArtist(artistName, paginationInfo.page + 1);
            setPaginationInfo(recordsFound.pagination);
            setArtistRecords((previousRecords: any) =>  {
               return [...previousRecords, ...recordsFound.results] 
            });
            setIsLoading(false);      
        } catch (error) {
            setRequestError('Error searching for artist');
            setArtistRecords([]);
            setIsLoading(false);
        }
    }

    return (
        // <div className='flex flex-col justify-center w-[80%]'>
        <div className='justify-center place-items-center h-screen min-h-screen items-center'>
            <SearchInputForm onSubmit={searchByArtist} />
            <SearchResults
                isLoading={isLoading}
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
