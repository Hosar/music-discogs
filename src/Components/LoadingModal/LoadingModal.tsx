import React, { CSSProperties } from 'react'

export function LoadingModal({ isLoading }: { isLoading: boolean }) {
    if (!isLoading) return null;

    return (
        <>
            <div style={styles.modalStyle}>
                Loading ...
            </div>
        </>
    );
}

const styles: { [key: string]: CSSProperties } = {
    modalStyle: {
        position: 'fixed',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(242,255,61)',
        opacity: 0.8,
        padding: '50px',
    }
}