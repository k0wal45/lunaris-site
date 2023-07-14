import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function BoxCenter({heading, text, icon}) {

  return (
    <div className={`flex flex-col justify-center items-center aspect-square lg:rounded-sm bg-primary bg-opacity-20  transition-all lg:hover:scale-105 gap-4 group w-screen lg:w-auto border-b-2 border-primary lg:border-none`}>
      <FontAwesomeIcon icon={icon} size="6x"/>
      <h4 className="text-4xl font-hussar text-primary opacity-70 text-center mt-4 lg:group-hover:text-white lg:group-hover:opacity-100">{heading}</h4>
      <p className="text-priamry text-lg text-center text-primary opacity-90 lg:group-hover:text-white lg:group-hover:opacity-100">{text}</p>
      
    </div>
  )
}

export default BoxCenter
