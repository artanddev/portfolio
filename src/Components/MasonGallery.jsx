import { useState } from "react"
import BigImage from "./BigImage"

function MasonGallery({images, title }) {

    const [isImageOpen, setIsImageOpen] = useState(false)
    const [bigImageSrc, setBigImageSrc] = useState(null)
    const handleImageClose = () => {
            setIsImageOpen(false)
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

            <div className="text-left py-4">
                <h2 className="text-3xl text-left pb-2 pl-4 md:pl-0"> {title} </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center-safe">
                    {images.map((column, columnIndex) => (
                        <div className="grid content-start gap-3" key={columnIndex}>
                            {column.map((image, imageIndex) => (
                                <div key={image}>
                                    <div class="overflow-hidden rounded-lg border border-neutral-300 rounded-lg shadow-md cursor-pointer">
                                    <img
                                        className="h-auto max-w-full hover:scale-105 duration-200 ease=in-out"
                                        src={image}
                                        alt={`PubMat artwork ${columnIndex + 1}-${imageIndex + 1}`}
                                        onClick={() => handleBigImageChange(image)}
                                        loading="lazy"
                                    />
                                    </div>
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