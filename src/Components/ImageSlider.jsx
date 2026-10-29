import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

export function ImageSlider({ imageUrls }) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length-1) return 0
            return index+1
            }
        )
    }

    function showPrevImage(){
        setImageIndex(index => {
            if (index === 0) return imageUrls.length-1
            return index-1;
            }
        )
    }
    return (
        <div class="relative">
            <img src={imageUrls[imageIndex]} className="rounded-lg m-auto" />
            <button class="block absolute top-0 bottom-0 left-0 cursor-pointer p-[1rem]  hover:bg-neutral-100/70 rounded-ss-lg duration-200"
                onClick={()=> showPrevImage()} >
                <ArrowBigLeft class="fill-black stroke-white size-10" />
            </button>
            <button class="block absolute top-0 bottom-0 cursor-pointer p-[1rem] right-0 hover:bg-neutral-100/70 rounded-ss-lg duration-200"
                onClick={() => showNextImage()}>
                <ArrowBigRight class="fill-black stroke-white size-10" />
            </button>
        </div>
    )
}

