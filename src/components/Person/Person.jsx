import React from 'react'
import PersonImg from './PersonImg'
import PersonSub from './PersonSub'

const Person = () => {
  return (
    <section className=" mx-auto flex flex-col lg:flex-row-reverse justify-center items-center gap-12 p-4">
      <PersonImg />
      <PersonSub />
    </section>
  )
}

export default Person
