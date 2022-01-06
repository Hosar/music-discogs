
export interface ArtistRecord {
    title: string;
    thumb: string;
    cover_image: string;

}

interface Props{
    artistRecordsFound: ArtistRecord[];
}

export function SearchResults({artistRecordsFound}: Props) {
    if(!artistRecordsFound || artistRecordsFound.length === 0){
        return <div><label>No records found</label></div>
    }
    return (
        <>
            {artistRecordsFound.map(artistInfo => {
                return (
                    <div>
                        <div>{artistInfo.title}</div>
                        <img src={artistInfo.thumb} alt={artistInfo.title} />
                    </div>
                )
            })}
        </>
    )
}
