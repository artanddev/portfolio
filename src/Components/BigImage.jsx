import { useEffect, useState } from 'react'

export default function BigImage({ imageSrc, altText, onClose }) {
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        setIsExpanded(true)
    }, [])

    return (
        <>
            <div
                id="image-overlay"
                className="fixed inset-0 z-10 flex items-center justify-center bg-neutral-700/80 p-4"
                onClick={(event) => onClose(event.target.id)}
            >
                <div
                    id="image-container"
                    className="relative h-fit w-fit"
                    onClick={(event) => onClose(event.target.id)}
                >
                    <button
                        id="image-close-button"
                        type="button"
                        className="absolute right-2 top-0 z-20 text-3xl leading-none hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        onClick={(event) => onClose(event.target.id)}
                        aria-label="Close image"
                    >
                        x
                    </button>
                    <img
                        src={imageSrc}
                        alt={altText}
                        className={`block rounded-lg transition-[max-height,max-width] duration-200 ease-out-cubic 
                            ${isExpanded
                                ? 'max-h-[90vh] max-w-[90vw]'
                                : 'max-h-[70vh] max-w-[70vw]'
                            }`}
                    />
                </div>
            </div>
        </>
    )
}