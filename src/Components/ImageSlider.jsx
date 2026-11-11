import { useState, useEffect, useRef } from "react"
import BigImage from "./BigImage"

export function ImageSlider({ imageUrls }) {
    const [imageIndex, setImageIndex] = useState(0)
    const [lightBoxPos, setLightBoxPos] = useState()
    const [lightBoxWidth, setLightBoxWidth] = useState(0)
    const observedElementRef = useRef(null);

    useEffect(() => {
        if (observedElementRef.current) {
            const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    setLightBoxWidth(entry.contentRect.width);
                    console.log(entry.contentRect.width);
                }

            });

            observer.observe(observedElementRef.current);

            // Cleanup function
            return () => {
                observer.disconnect();
            };
        }
    }, []);

    function selectImage(id) {
        setImageIndex(id);
        setLightBoxPos(Math.max(Math.min(((id / imageUrls.length * -100) + (((lightBoxWidth / (200 * imageUrls.length)) * 100) / 2)), 0), (((lightBoxWidth / (120 * imageUrls.length)) * 100) - 100)))
    }

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

            <div class="relative">
                <img src={imageUrls[imageIndex]} className="rounded-t-lg m-auto  cursor-pointer" loading="lazy"
                    onClick={() => handleBigImageChange(imageUrls[imageIndex])} />

                <div class="h-20 overflow-hidden relative rounded-b-lg" ref={observedElementRef}>
                    <div class="flex flex-row flex-nowrap absolute transition ease-in-out duration-300"
                        style={{ transform: `translateX(${lightBoxPos}%)` }}>
                        {imageUrls.map((image, index) => (
                            <div class="w-[120px] h-[100px] bg-gray-400">
                                <img src={image} key={index} class={`w-[100%] h-[100%] object-cover cursor-pointer
                        ${index != imageIndex ?
                                        "brightness-50"
                                        :
                                        "brightness-100"
                                    }`}

                                    onClick={() => selectImage(index)} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* <button class="block absolute top-0 bottom-0 left-0 cursor-pointer p-[1rem]  
            hover:bg-gradient-to-r from-slate-50 to-slate-50/0"
                onClick={()=> showPrevImage()} >
                <ChevronLeft class="stroke-black size-10" />
            </button>
            <button class="block absolute top-0 bottom-0 cursor-pointer p-[1rem] right-0 hover:bg-gradient-to-l from-slate-50 to-slate-50/0"
                onClick={() => showNextImage()}>
                <ChevronRight class="stroke-black size-10" />
            </button> */}
            </div>
        </>
    )
}

