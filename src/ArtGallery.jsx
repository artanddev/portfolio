import img1 from './assets/Artist Portfolio/PubMat/img1.png'
import img2 from './assets/Artist Portfolio/PubMat/img2.png'
import img3 from './assets/Artist Portfolio/PubMat/img3.png'
import img4 from './assets/Artist Portfolio/PubMat/img4.png'
import img5 from './assets/Artist Portfolio/PubMat/img5.gif'

function ArtGallery() {
  return (
    

//I can prolly turn this into an array of images and map through them to make this more dynamic, but for now this is fine.

<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    <div className="grid content-start gap-3">
        <div>
            <img className="h-auto max-w-full rounded-lg hover:opacity-25" src={img1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg hover:opacity-25" src={img2} alt=""/>
        </div>
    </div>
    <div className="grid content-start gap-3">
        <div>
            <img className="h-auto max-w-full rounded-lg hover:opacity-25" src={img3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg hover:opacity-25" src={img4} alt=""/>
        </div>
    </div>
    <div className="grid content-start gap-3">
        <div>
            <img className="h-auto max-w-full rounded-lg hover:opacity-25" src={img5} alt=""/>
        </div>
    </div>
</div>

  );
}

export default ArtGallery;