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
        return <div className='w-[80%] mt-8 text-center'><label>No records found</label></div>
    }
    return (
        <div className={classes.main}>
        <div className={classes.grid}>
            <LoadingModal isLoading={isLoading} />
            {artistRecordsFound.map((artistInfo: any, index: number) => {
                const id = artistInfo.id?.toString();
                if (artistRecordsFound.length === index + 1) {
                    return (
                        <div className={classes.artistRecord} 
                            key={id} ref={lastRecord} 
                            data-testid="artist-records-found">
                            <img src={artistInfo.thumb} alt={artistInfo.title} />
                            <p className={classes.text}>{artistInfo.title}</p>
                        </div>);
                }

                return (
                    <div className={classes.artistRecord} 
                        key={id} data-testid="artist-records-found">
                        <img src={artistInfo.thumb} alt={artistInfo.title} />
                        <p className={classes.text}>{artistInfo.title}</p>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

const classes = {
    artistRecord: 'place-items-center items-center justify-items-center',
    grid: 'grid place-items-center items-center h-screen grid-cols-3 gap-2',
    text: 'max-w-[150px]',
    main: 'w-[100%] mt-8',
};