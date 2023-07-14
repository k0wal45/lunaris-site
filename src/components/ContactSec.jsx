import React from 'react'
import ContactSubs from './subcomponents/ContactSubs'
import ContactForm from './subcomponents/ContactForm'

function ContactSec() {
  return (
    <section className="bg-base-200 pt-4 lg:p-8 flex flex-row lg:flex-col justify-center items-center gap-8 w-full">
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        <ContactSubs />    
        <ContactForm />
      </div>
    </section >
  )
}

export default ContactSec
