import React from 'react'

export function RequestError({ errorMessage }: { errorMessage: string }) {
    return (
        <div>
            {errorMessage}
        </div>
    )
}
