import React from 'react'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'

import ContactSec from '../components/ContactSec'

function Blog() {
  return (
    <main className='flex flex-col justify-center items-center w-full gap-8 bg-base-100'>
      <section class="hero min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Blog w budowie...</h1>
            <p class="py-6">Bardzo dziękujemy że tu zajrzałeś, ale nasz blog jeszcze nie jest gotowy i dalej jest w budowie. Jeśli interesują cię publikwoane przez nas treści o stronach internetowych i marketingu zajrzyj na nasze media społecznościowe, tam aktualnie je zamieszczamy</p>
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

export default Blog
