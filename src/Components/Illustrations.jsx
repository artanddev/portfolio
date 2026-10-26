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
                <MasonGallery
                    // onChangeBigImage={handleBigImageChange}
                />
            </section>

            <section id="spacer"></section>

           
        </>
    )
}


export default Illustrations;