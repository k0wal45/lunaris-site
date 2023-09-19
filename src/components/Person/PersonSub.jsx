import React from 'react'
import { Link } from 'react-router-dom'

const PersonSub = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:items-start gap-4 max-w-xl'>
      <h3 className="text-5xl font-hussar">Wszystko w 1 rękach</h3>
      <p className="text-lg text-justify">Czy marzysz o posiadaniu własnej strony internetowej? Z nami to staje się prostsze niż sobie wyobrażasz! Jesteśmy jednoosobowym zespołem, który specjalizuje się w kompleksowej tworzeniu stron internetowych, logotypów i innych materiałów reklamowych. Daj mi szansę spełnić Twoje marzenia online!</p>
      <h4 className="text-4xl font-hussar">Od kontaktu, po realizacje</h4>
      <p className="text-lg text-justify">Od pierwszego kontaktu z klientem po finalną realizację projektu, jestem z Tobą na każdym etapie.</p>
      <div className="flex gap-8">
        <Link to='/kontakt' className='btn btn-primary'>Napisz Do Nas</Link>
        <Link to='/onas' className='btn btn-primary'>Dowiedz się więcej</Link> 
      </div>
    </div>
  )
}

export default PersonSub
