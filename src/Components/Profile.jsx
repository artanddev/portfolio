import me from '../assets/me.png'
import Contacts from './Contacts.jsx'

function Profile() {
  return (

    <section id="center" class="my-6">
      <div className="hero">
        <img src={me} className="w-50 h-50 rounded-full object-cover" alt="owner's bomb-ass selfie " />
      </div>
      <div>
        <div class="-my-5">
          <h1 class="text-lg/10">Arturo Andres P. de Silva</h1>
        </div>
        <p>
          Game Developer | Computer Science Graudate | Multimedia Artist
        </p>

        <div class="mt-2">
          <p>
            Meet my alters: Hi! I'm bunny! (she/they)
          </p>
        </div>

      </div>
      <Contacts> </Contacts>
    </section>

  )
}

export default Profile;
