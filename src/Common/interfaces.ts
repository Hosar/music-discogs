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

export interface SearchResultsProps {
    isLoading: boolean;
    artistRecordsFound: ArtistRecord[];
    paginationInfo: Pagination;
    handleNextPage: (pageNumber: number) => void;
}

export interface ArtistDetailsProps {
    id: number;
    artistInfo: ArtistRecord;
    style: React.CSSProperties;
}