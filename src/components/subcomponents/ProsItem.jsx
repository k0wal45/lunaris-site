import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProsItem({heading, text, icon}) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">

      <FontAwesomeIcon icon={icon} size="6x"/>
      <h5 className="text-bold text-3xl">{heading}</h5>
      <p className="text-lg opacity-70">{text}</p>
    </div>
  )
}

export default ProsItem
