import { Read } from '../Common/WithSuspenseContract'
import { useState, useEffect } from 'react';
import { fakeMusicResults } from './fakeMusicResults';
export interface ArtistRecord {
    title: string;
    thumb: string;
    cover_image: string;
    id: number;

}

// interface Props{
//     artistRecordsFound: ArtistRecord[];
// }
interface Props{
        artistRecordsFound: Read;
}


export const SearchResults = ({artistRecordsFound}: Props) => {
    const artistRecords = artistRecordsFound.read();
    if(!artistRecords || artistRecords.length === 0){
        return <div><label>No records found</label></div>
    }
    return (        
            artistRecords.map((artistInfo: any) => {
                const id = artistInfo.id?.toString();
                return (
                    <div key={id} data-testid="artist-records-found">
                        <div id={`title-${id}`}>{artistInfo.title}</div>
                        <img id={`tumb-${id}`} src={artistInfo.thumb} alt={artistInfo.title} />
                    </div>
                )
            })
    )
}
