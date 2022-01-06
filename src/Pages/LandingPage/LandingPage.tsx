import { Suspense } from 'react'
import { Read } from '../../Components/Common/WithSuspenseContract'
import { SearchResults } from '../../Components/SearchResults'
export function LandingPage({ artistRecordsFound }: { artistRecordsFound: Read }) {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <SearchResults artistRecordsFound={artistRecordsFound} />
        </Suspense>
    )
}
