import React from 'react'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'

import ContactSec from '../components/ContactSec'

function Advanced() {
  return (
    <main className='flex flex-col justify-center items-center w-full gap-8 bg-base-100'>
      <section class="hero min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl lg:text-7xl font-bold">Advanced</h1>
            <p class="py-6">Jeżeli tu zajrzałeś to pewnie jesteś zainteresowany moimi umiejętnościami. Od listopada 2022 roku uczę się tworzenia stron internetowych. W moim portfolio znajduje się pare komercyjnych projektów w vanila HTML, CSS i JS, ale od niedawana zaczynam uczyć się bardziej zaawansowanych rzeczy. Głównie skupiam się na React JS i MERN Stack, planuje również nauczyć się Next JS, do stylowania używam Tailwind CSS oraz DaisyUI. Jeśli interesuje cie współpraca ze mną skontaktuj się ze mną! </p>
            <div class="btn-group rounded-xl">

              <button class="btn invert">
                <a href="https://www.instagram.com/lunarisweb.pl/" aria-label="Link do Instagrama">
                  <img src={instagram} alt="Instagram Icon" className='invert'/>
                </a>
              </button> 

              <button class="btn invert">
                <a href="https://www.facebook.com/profile.php?id=100093384969239" aria-label="Link do Instagrama">
                  <img src={facebook} alt="Facebook Icon" className='invert'/>
                </a>
              </button> 

            </div>
          </div>
        </div>
      </section>
      <ContactSec />
    </main>
  )
}

export default Advanced
