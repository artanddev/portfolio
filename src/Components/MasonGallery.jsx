import img1 from '../assets/Artist Portfolio/PubMat/img1.png'
import img2 from '../assets/Artist Portfolio/PubMat/img2.png'
import img3 from '../assets/Artist Portfolio/PubMat/img3.png'
import img4 from '../assets/Artist Portfolio/PubMat/img4.png'
import img5 from '../assets/Artist Portfolio/PubMat/img5.gif'

const galleryColumns = [
    [img1, img2],
    [img3, img4],
    [img5],
]

function MasonGallery({onChangeBigImage}) {
    return (

        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-left"> Org Work </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {galleryColumns.map((column, columnIndex) => (
                    <div className="grid content-start gap-3" key={columnIndex}>
                        {column.map((image, imageIndex) => (
                            <div key={image}>
                                <img
                                    className="h-auto max-w-full rounded-lg hover:opacity-25 transition-opacity duration-300"
                                    src={image}
                                    alt={`PubMat artwork ${columnIndex + 1}-${imageIndex + 1}`}
                                    onClick={() => onChangeBigImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default MasonGallery;