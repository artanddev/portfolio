import { useState } from 'react'
import me from '../assets/me.png'
import MasonGallery from './MasonGallery'
import BigImage from './BigImage'

function Main() {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [bigImageSrc, setBigImageSrc] = useState(null)
  const handleImageClose = (clickedId) => {
    if (['image-overlay', 'image-container', 'image-close-button'].includes(clickedId)) {
      setIsImageOpen(false)
    }
  }
  const handleBigImageChange = (imageSrc) => {
      setBigImageSrc(imageSrc)
      setIsImageOpen(true)
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <section id="center">
        <div className="hero">
          <img src={me} className=" w-50 h-50 rounded-full object-cover" alt="owner's bomb-ass selfie" />
        </div>
        <div>
          <h1>Arturo Andres P. de Silva</h1>
          <p>
            Game Developer | Computer Science Graudate | Multimedia Artist
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>My Stuff</h2>
          <p>I guess this is where I showcase my work</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
               
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Dis. Dis Moment.</h2>
          <p>Contact me never are you crazy</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>


      {isImageOpen && (
        <BigImage
          imageSrc={bigImageSrc}
          altText="PubMat artwork 3-1"
          onClose={handleImageClose}
        />
      )}

      <section id="hero">
        <MasonGallery
          onChangeBigImage={handleBigImageChange}
        />
      </section>

      <section id="spacer"></section>

      <section id="footer">
        <p>Work in Progress - Last Updated: {new Date().toLocaleDateString()} </p>
      </section>
    </>
  )
}

export default Main
