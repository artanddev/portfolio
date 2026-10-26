import me from '../assets/me.png'
import Contacts from './Contacts.jsx'

function Profile(){
    return(
        
      <section id="center">
        <div className="hero">
          <img src={me} className=" w-50 h-50 rounded-full object-cover" alt="owner's bomb-ass selfie " />
        </div>
        <div>
          <h1>Arturo Andres P. de Silva</h1>
          <p>
            Game Developer | Computer Science Graudate | Multimedia Artist
          </p>
        </div>
        <Contacts> </Contacts>
      </section>

    )
}

export default Profile;
