
function MasonGallery({onChangeBigImage, images, title}) {
    return (

        <div className="p-8 border border-neutral-300 rounded-lg shadow-md m-10 text-left">
            <h1 className="text-3xl font-bold text-left"> {title} </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {images.map((column, columnIndex) => (
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