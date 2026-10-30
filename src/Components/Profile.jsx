import { useState } from 'react'
import me from '../assets/me.png'
import hachiware from '../Assets/hachiware.jpg'
import Contacts from './Contacts.jsx'

function Profile() {

  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <section id="center" class="my-6">
      <div className="hero">
        <img src={me} class="w-50 h-50 rounded-full absolute hover:rotate-y-180 hover:opacity-0 transition duration-300 ease-in-out-cubic cursor-pointer"/>
        <img src={hachiware} class="w-50 h-50 rounded-full"/>
        {/* <img src={isMouseOver===false ? me : hachiware} className="w-50 h-50 rounded-full object-cover transition duration-300 ease-in-out" 
        alt="owner's bomb-ass selfie " 
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        /> */}
      </div>
      <div>
        <div class="-my-5">
          <h1 class="text-lg/10">Arturo Andres P. de Silva</h1>
        </div>
        <p>
          Game Developer | Computer Science Graduate | Multimedia Artist
        </p>
        <Contacts> </Contacts>
      </div>
    </section>

  )
}

export default Profile;
