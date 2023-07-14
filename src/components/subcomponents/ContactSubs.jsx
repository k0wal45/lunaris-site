import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../assets/svg/facebook.svg'
import instagram from '../../assets/svg/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ContactSubs() {
  return (
    <div className="text-center lg:text-left flex flex-col justify-center p-4">
      <h6 className="text-3xl lg:text-5xl font-bold">Skontaktuj się już Teraz</h6>
      <p className="py-6">Jeśli interesują cie nasze usługi i chcesz się skontaktować napisz do nas tutaj lub tylko umieść swój email abyśmy mogli się z tobą skontaktować</p>
      <div className="divider">Lub</div>
      <h2 className="text-3xl lg:text-5xl font-bold">Napisz do Nas Tutaj</h2>
      <ul className='p-4 mt-4 lg:mt-10 flex flex-col gap-8'>
        <li className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='aspect-square rounded-full p-4 bg-base-100 w min'>
            <FontAwesomeIcon icon={faPhone} size='xl' className=''/>
          </div>
          <span className="text-xl lg:text-3xl font-hussar">
            <a href="tel:+48664447556">
              +48 664 447 556
            </a>
          </span>
        </li> 

        <li className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='aspect-square rounded-full p-4 bg-base-100 w min'>
          <FontAwesomeIcon icon={faEnvelope} size='xl' className=''/>
          </div>       
          <span className="text-xl lg:text-3xltext-3xl font-hussar">
            <a href="mailto:lunarisweb.pl@gmail.com">
              lunarisweb.pl@gmail.com
            </a>
          </span>
        </li> 
      </ul>
      <ul>
        <li className="p-4 flex flex-col lg:flex-row justify-center items-center gap-4">
            <ul class="carousel carousel-center rounded-box">
              <li class="carousel-item justify-center items-center bg-white shadow-inner p-4 aspect-square">
                <a href="https://www.instagram.com/lunarisweb.pl/" aria-label="Link do Instagrama">
                  <img src={instagram} alt="Instagram Icon" className='hover:scale-150 transition-all'/>
                </a>
              </li> 
              <li class="carousel-item justify-center items-center bg-white shadow-inner p-4 aspect-square">
                <a href="https://www.facebook.com/profile.php?id=100093384969239" aria-label="Link do Instagrama">
                  <img src={facebook} alt="Facebook Icon" className='hover:scale-150 transition-all'/>
                </a>
              </li> 
              
            </ul>
            <p>Zaobserwuj nas na Instagramie oraz Facebooku po wartościowe treści ze świata marketingu</p>
        </li>
      </ul>
    </div>


  )
}

export default ContactSubs
