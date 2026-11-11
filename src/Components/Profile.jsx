import { useState } from 'react'
import me from '../assets/me.png'
import hachiware from '../Assets/hachiware.jpg'
import Contacts from './Contacts.jsx'

function Profile() {

  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <section id="center" class="my-6">
      <div className="hero">
        <a href="/portfolio/game-development">
        <img src={me} class="w-50 h-50 rounded-full absolute  hover:opacity-0 ease-in-out transition cursor-pointer"/>
        <img src={hachiware} class="w-50 h-50 rounded-full"/>
        </a>
      </div>
      <div>
        <div class="-my-5">
          <h1 class="text-lg/10">Arturo Andres P. de Silva</h1>
        </div>
        <p>
          Game Developer | Computer Science Graduate | Multimedia Artist
        </p>

        <p>
          Hello! I'm someone that can do a lot in both coding and design fields. I'm also currently learning 3D modelling.
        </p>
        <Contacts> </Contacts>
      </div>
    </section>

  )
}

export default Profile;
