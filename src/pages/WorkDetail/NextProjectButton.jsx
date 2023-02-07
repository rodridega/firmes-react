import React from 'react'

export const NextProjectButton = ({ imagePreviewActive, setImagePreviewActive, data }) => {

    const handleNextProject = () => {
        if (imagePreviewActive === data[0]?.images.length - 1) {
            setImagePreviewActive(0)
            return
        }
        setImagePreviewActive(current => current + 1)
    }
    return (
        <button className='text-white text-xl flex items-center gap-4 m-4 self-end hover:text-firmes-violet order-5 md:order-4' onClick={handleNextProject} >
            NEXT PROJECT
            <img src='/src/assets/arrow.svg' />
        </button>
    )
}
