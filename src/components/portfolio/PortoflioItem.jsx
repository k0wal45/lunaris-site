import React from 'react'

const PortoflioItem = ({imgArray, title, text}) => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {
          imgArray.map((img) => (
            <img src={img} alt="Zdjęcie Portfolio Lunaris Web" className=' max-h-48'/>
          ))
        }
      </div>
      <div className="flex flex-col justify-center items-center text-center lg:max-w-[50vw] gap-8">
        <h6 className="text-3xl font-hussar">{title}</h6>
        <p className="text-lg">{text}</p>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default PortoflioItem
