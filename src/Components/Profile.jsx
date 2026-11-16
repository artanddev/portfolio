import { useState } from 'react'
import me from '../assets/me.png'
import hachiware from '../Assets/hachiware.jpg'
import Contacts from './Contacts.jsx'

function Profile() {

  return (
    <section id="center" class="md:mt-5">
      <div className="hero relative">
        <a href="/portfolio/game-development">
        <img src={me} class="w-50 h-50 rounded-full border-2 border-gray-700 border-solid hover:opacity-0 ease-in-out transition cursor-pointer
        absolute"/>
        <img src={hachiware} class="w-50 h-50 rounded-full"/>
        </a>
      </div>
      <div class="-mt-16 z-10">
        <div class="border max-w-max px-10 py-2 block m-auto rounded-lg bg-white shadow-lg shadow-red-700/20">
          <h1 class="text-3xl md:text-5xl m-0 tracking-tighter">ARTURO ANDRES P. DE SILVA</h1>
          <p class="text-xs md:text-sm md:tracking-[0.2em]">
          Game Developer | Computer Science Graduate | Multimedia Artist
        </p>
        </div>
        <div class="mt-4 md:w-[80%] block m-auto">
          <p class="text-gray-900 text-md text-justify lg:text-center">
            Hello! I'm a developer that is passionate in both programming and art. I'm always seeking opportunities to learn more and apply said learnings in design and software development fields.
          </p>
        </div>
        <Contacts> </Contacts>
      </div>
    </section>

  )
}

export default Profile;
