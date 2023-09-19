import photo from '../../assets/webp/chlop.webp'
import tekstWKolo from '../../assets/jpg/tekstWkolo.png'

const PersonImg = () => {
  return (
    <div className='relative'>
        <img src={tekstWKolo} alt="Lunaris Web tekst" className='w-[40%] aspect-square absolute top-0 right-0  bg-primary rounded-full p-[1rem] animate-spin-slow'/>
        <img src={photo} alt="Daniel Kowalski Zdjęcie" className="h-[50vh] aspect-square rounded-full shadow-lg" />
    </div>
  )
}

export default PersonImg
