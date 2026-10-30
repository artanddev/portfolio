import MasonGallery from "./MasonGallery"

{/*IMG Import */}
import icon1 from "../Assets/images/2D Asset Work/Sprite Icon Work/1.webp"
import icon2 from "../Assets/images/2D Asset Work/Sprite Icon Work/2.webp"
import icon3 from "../Assets/images/2D Asset Work/Sprite Icon Work/3.webp"
import icon4 from "../Assets/images/2D Asset Work/Sprite Icon Work/4.webp"

const spriteIMG = [
    [icon1],
    [icon2, icon3],
    [icon4]
]

import char1 from "../Assets/images/2D Asset Work/Sprite and Character Work/1.webp"
import char2 from "../Assets/images/2D Asset Work/Sprite and Character Work/2.webp"
import char3 from "../Assets/images/2D Asset Work/Sprite and Character Work/3.webp"
import char4 from "../Assets/images/2D Asset Work/Sprite and Character Work/4.webp"

const charIMG = [
    [char1, char4],
    [char2],
    [char3],
]

import bg1 from "../Assets/images/2D Asset Work/Background and Cutscene Work/1.webp"
import bg2 from "../Assets/images/2D Asset Work/Background and Cutscene Work/2.webp"

const bgIMG = [
    [bg1],
    [bg2]
]

function TwoDAssetWork()
{
    return (
        <>
        <MasonGallery images={spriteIMG} title="Sprite Icons"/>
        <MasonGallery images={charIMG} title="Sprite Characters"/>
        <MasonGallery images={bgIMG} title="Background and CG"/>
        
        </>
    )
}

export default TwoDAssetWork