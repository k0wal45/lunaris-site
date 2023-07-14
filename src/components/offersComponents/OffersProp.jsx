import React from 'react'

function OffersProp({children, textHead}) {
  return (
    <section className="flex flex-col justify-center items-center p-4 w-full">
      <h4 className="font-hussar text-4xl">{textHead}</h4>
      <div className="flex flex-col gap-8 justify-center items-center">
        {children}
      </div>
    </section>
  )
}

export default OffersProp
