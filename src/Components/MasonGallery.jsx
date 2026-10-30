import { useState } from "react"
import BigImage from "./BigImage"

function MasonGallery({images, title }) {

    const [isImageOpen, setIsImageOpen] = useState(false)
    const [bigImageSrc, setBigImageSrc] = useState(null)
    const handleImageClose = (clickedId) => {
        if (['image-overlay', 'image-container', 'image-close-button'].includes(clickedId)) {
            setIsImageOpen(false)
        }
    }
    const handleBigImageChange = (imageSrc) => {
        setBigImageSrc(imageSrc)
        setIsImageOpen(true)
    }


    return (
        <>
            {isImageOpen && (
                <BigImage
                    imageSrc={bigImageSrc}
                    onClose={handleImageClose}
                />
            )}

            <div className="m-10 text-left">
                <h1 className="text-3xl font-bold text-left"> {title} </h1>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center-safe">
                    {images.map((column, columnIndex) => (
                        <div className="grid content-start gap-3" key={columnIndex}>
                            {column.map((image, imageIndex) => (
                                <div key={image}>
                                    <img
                                        className="h-auto max-w-full rounded-lg hover:opacity-25 transition-opacity duration-300 border border-neutral-300 rounded-lg shadow-md cursor-pointer"
                                        src={image}
                                        alt={`PubMat artwork ${columnIndex + 1}-${imageIndex + 1}`}
                                        onClick={() => handleBigImageChange(image)}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default MasonGallery;