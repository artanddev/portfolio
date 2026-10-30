// const [isImageOpen, setIsImageOpen] = useState(false)
// const [bigImageSrc, setBigImageSrc] = useState(null)
// const handleImageClose = (clickedId) => {
//   if (['image-overlay', 'image-container', 'image-close-button'].includes(clickedId)) {
//     setIsImageOpen(false)
//   }
// }
// const handleBigImageChange = (imageSrc) => {
//   setBigImageSrc(imageSrc)
//   setIsImageOpen(true)
// }
import MasonGallery from './MasonGallery.jsx'

/*IMG Imports */
import img1 from '../assets/images/Illustrations/Pubmat Illustrations/1.webp'
import img2 from '../assets/images/Illustrations/Pubmat Illustrations/2.webp'
import img3 from '../assets/images/Illustrations/Pubmat Illustrations/3.webp'
import img4 from '../assets/images/Illustrations//Pubmat Illustrations/4.webp'
import img5 from '../assets/images/Illustrations/Pubmat Illustrations/5.webp'
import img6 from '../assets/images/Illustrations/Pubmat Illustrations/6.gif'
import img7 from '../assets/images/Illustrations/Pubmat Graphics/1.webp'
import img8 from '../assets/images/Illustrations/Pubmat Graphics/2.webp'
import img9 from '../assets/images/Illustrations/Pubmat Graphics/3.webp'

/* column x row */
const orgIllust = [
    [img4, img6],
    [img2, img1],
    [img3, img5]
]

const orgGraph = [
    [img7],
    [img8],
    [img9]
]

function Illustrations() {
    return (
        <>
            {/* {isImageOpen && (
                <BigImage
                    imageSrc={bigImageSrc}
                    altText="PubMat artwork 3-1"
                    onClose={handleImageClose}
                />
            )} */}

            <section id="hero">
                <MasonGallery images={orgIllust} title="Pubmat (Illustration)" />
                <MasonGallery images={orgGraph} title="PubMat (Graphics)" />
            </section>
        </>
    )
}


export default Illustrations;