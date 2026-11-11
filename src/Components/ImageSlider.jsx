import { useState } from "react"
import {ChevronLeft, ChevronRight } from "lucide-react"

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
            <img src={imageUrls[imageIndex]} className="rounded-lg m-auto" loading="lazy"/>
            <button class="block absolute top-0 bottom-0 left-0 cursor-pointer p-[1rem]  
            hover:bg-gradient-to-r from-slate-50 to-slate-50/0"
                onClick={()=> showPrevImage()} >
                <ChevronLeft class="stroke-black size-10" />
            </button>
            <button class="block absolute top-0 bottom-0 cursor-pointer p-[1rem] right-0 hover:bg-gradient-to-l from-slate-50 to-slate-50/0"
                onClick={() => showNextImage()}>
                <ChevronRight class="stroke-black size-10" />
            </button>
        </div>
    )
}

