import { useState, useEffect, useRef } from "react"

export function ImageSlider({ imageUrls }) {
    const [imageIndex, setImageIndex] = useState(0)
    const [lightBoxPos, setLightBoxPos] = useState()
    const [lightBoxWidth, setLightBoxWidth] = useState(0)

    const stageCanvasRef = (node) => {
        if (node)
            setLightBoxWidth(node.getBoundingClientRect().width)
    }

    // useEff
    // ect( () => {
    //     if(stageCanvasRef.current != null){
    //         setLightBoxWidth(stageCanvasRef.current.getBoundingClientRect().width)
    //         console.log("Size" + lightBoxWidth)
    //     }
    // }, [stageCanvasRef]);

    function selectImage(id) {
        setImageIndex(id);
        setLightBoxPos( Math.max(Math.min(((id/imageUrls.length * -100) + (((lightBoxWidth/(140*imageUrls.length)) * 100) / 2 )), 0), (((lightBoxWidth/(id/imageUrls.length * -100)) * 100) -100) ))
    }

    return (
        <div class="relative">
            <img src={imageUrls[imageIndex]} className="rounded-lg m-auto" loading="lazy" />

            <div class="h-20 overflow-hidden relative" ref={stageCanvasRef}>
                <div class="flex flex-row flex-nowrap absolute transition ease-in-out duration-300"
                    style={{ transform: `translateX(${lightBoxPos}%)` }}>
                    {imageUrls.map((image, index) => (
                        <div class="w-[140px] h-[100px] bg-gray-400">
                            <img src={image} key={index} class={`w-[100%] h-[100%] object-cover cursor-pointer
                        ${index != imageIndex ?
                                    "brightness-60"
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
    )
}

