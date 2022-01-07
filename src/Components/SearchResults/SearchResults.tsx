import { useCallback, useRef } from 'react';
import { LoadingModal } from '../LoadingModal';
import { SearchResultsProps } from '../../Common/interfaces'

export const SearchResults = ({
    isLoading,
    artistRecordsFound,
    paginationInfo,
    handleNextPage }: SearchResultsProps) => {
    const scrollObserver = useRef<IntersectionObserver>();

    const lastRecord = useCallback(record => {
        if (!record) return;

        if (scrollObserver.current) scrollObserver.current.disconnect();

        scrollObserver.current = new window.IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                handleNextPage(paginationInfo.page);
            }
        });
        scrollObserver.current.observe(record);
    }, [paginationInfo.page, handleNextPage]);

    if (artistRecordsFound.length === 0 && !isLoading) {
        return <div><label>No records found</label></div>
    }
    return (
        <div className='w-[100%]'>
        <div className='grid place-items-center items-center h-screen grid-cols-3 gap-2'>
            <LoadingModal isLoading={isLoading} />
            {artistRecordsFound.map((artistInfo: any, index: number) => {
                const id = artistInfo.id?.toString();
                if (artistRecordsFound.length === index + 1) {
                    return (
                        <div key={id} ref={lastRecord} data-testid="artist-records-found">
                            <div>{artistInfo.title}</div>
                            <img src={artistInfo.thumb} alt={artistInfo.title} />
                        </div>);
                }

                return (
                    <div key={id} data-testid="artist-records-found">
                        <div>{artistInfo.title}</div>
                        <img src={artistInfo.thumb} alt={artistInfo.title} />
                    </div>
                )
            })}
        </div>
        </div>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '2em'
    },
    artistInfo: {
        margin: '2em'
    }
};