import { Link } from "react-router-dom"
import Newsletter from "./Newsletter"

function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    
    <>
      <section class="footer flex flex-col lg:flex-row jusitify-start lg:justify-around p-10 bg-base-100 text-base-content shadow-inner z-70">
        <section>
          <span class="footer-title">Oferta</span> 
          <ul>
            <li><Link to='/oferta/stronyinternetowe'>Strony Internetowe</Link></li>
            <li><Link to='/oferta/logotypy'>Logotypy</Link></li>
            <li><Link to='/oferta/grafika'>Grafika Komputerowa</Link></li>
            <li><Link to='/oferta/socialmedia'>Social Media</Link></li>
            <li><Link to='/oferta/strategiareklamowa'>Strategia Reklamowa</Link></li>
          </ul>
        </section> 
        <section>
          <span class="footer-title">Portfolio</span> 
          <ul>
            <li><Link to='/portfolio/bqcarskatowice'>BQ Cars Katowice</Link></li>
            <li><Link to='/portfolio/merkurymedica'>Merkury Medica</Link></li>
            <li><Link to='/portfolio/oktechklimatyzacje'>Oktech Klimatyzacje</Link></li>
            <li><Link to='/portfolio/wervasolutions'>Werva Solutions</Link></li>
          </ul>
        </section> 
        <section>
          <span class="footer-title">Strona</span> 
          <ul>
          <li>
            <Link to='/' class="link link-hover">Strona Główna</Link> 
          </li>
          <li>
            <Link to='/onas' class="link link-hover">O nas</Link> 
          </li>
          <li>
            <Link to='/blog' class="link link-hover">Blog</Link> 
          </li>
          <li>
            <Link to='/kontakt' class="link link-hover">Kontakt</Link> 
          </li>

          </ul>
        </section>  
        <Newsletter />
      </section>

    <footer class="footer place-items-center p-4 bg-neutral text-neutral-content shadow-inner z-70">
      <div class="items-center grid-flow-col">
        <p>Copyright © {year} - All right reserved</p>
      </div> 
      <section>
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/lunarisweb.pl/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noreferrer" aria-label="Link do konta na Instagramie">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current hover:fill-primary">
              <path fill-rule="nonzero" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
          </a> 
          <a href="https://www.facebook.com/people/Lunaris-Web/100093384969239/" target="_blank" rel="noreferrer" aria-label="Link do konta na facebooku">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current hover:fill-primary">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </section> 
    </footer>
  </>
  )
}

export default Footer
