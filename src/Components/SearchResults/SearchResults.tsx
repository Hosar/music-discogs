import { useCallback, useRef, forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
export interface ArtistRecord {
    title: string;
    thumb: string;
    cover_image: string;
    id: number;
}

export interface Pagination {
    page: number;
    pages?: number;
    per_page?: number;
    items?: number;
    urls?: object;
}
interface Props {
    artistRecordsFound?: ArtistRecord[];
    paginationInfo: Pagination;
    handleNextPage: (pageNumber: number) => void;
}

interface ArtistDetailsProps {
    id: number;
    // key: string,
    artistInfo: ArtistRecord;
    style: React.CSSProperties;
}

export const SearchResults = ({
    artistRecordsFound, 
    paginationInfo, 
    handleNextPage }: Props) => {
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
    
    if (!artistRecordsFound) return null;
    if (artistRecordsFound.length === 0) {
        return <div><label>No records found</label></div>
    }
    return (
        <div style={styles.container}>
            {artistRecordsFound.map((artistInfo: any, index: number) => {
                const id = artistInfo.id?.toString();
                if (artistRecordsFound.length === index + 1) {
                    return (<div key={id} ref={scrollObserver} data-testid="artist-records-found">
                        <div>{artistInfo.title}</div>
                        <img src={artistInfo.thumb} alt={artistInfo.title} />
                    </div>);
                }

                return (<div key={id} data-testid="artist-records-found">
                        <div>{artistInfo.title}</div>
                        <img src={artistInfo.thumb} alt={artistInfo.title} />
                    </div>)             
            })}
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