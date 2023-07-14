import { Link } from "react-router-dom"
import logo from '../assets/logo.png'

function Navbar() {


  return (
  <nav className={`navbar absolute z-30 font-bold`}>
    <section class="navbar-start lg:hidden dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="grey"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Strona Główna</Link></li>
        <li><Link to='/onas'>O Nas</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li>

            <summary>
              Oferty
            </summary>
            <ul className="p-2 bg-base-100">
            <li><Link to='/oferta/stronyinternetowe'>Strony Internetowe</Link></li>
              <li><Link to='/oferta/logotypy'>Logotypy</Link></li>
              <li><Link to='/oferta/grafika'>Grafika Komputerowa</Link></li>
              <li><Link to='/oferta/socialmedia'>Social Media</Link></li>
              <li><Link to='/oferta/strategiareklamowa'>Strategia Reklamowa</Link></li>
            </ul>

        </li>
        <li>

            <summary>
              Portfolio
            </summary>
            <ul className="p-2 bg-base-100">
            <li><Link to='/portfolio/bqcarskatowice'>BQ Cars Katowice</Link></li>
              <li><Link to='/portfolio/merkurymedica'>Merkury Medica</Link></li>
              <li><Link to='/portfolio/oktechklimatyzacje'>Oktech Klimatyzacje</Link></li>
              <li><Link to='/portfolio/wervasolutions'>Werva Solutions</Link></li>
            </ul>

        </li>
        <li>
          <Link to='/kontakt'><div className="btn btn-outline btn-primary border-[2px]">Kontakt</div></Link>
        </li>
        
      </ul>
    </section>
    <section className="mr-[4px] navbar-center sm:navbar-end md:mr-0 md:navbar-start">
      <Link to='/' className="flex justify-center items-center p-4 gap-4">
        <img src={logo} alt="Logo Lunaris Web" width='70px'/>
        <h2 className="whitespace-nowrap text-xl md:text-3xl font-bold font-hussar-italic mt-[5px] ">Lunaris Web</h2>
      </Link>
    </section>
    <section className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1 justify-center items-center gap-4">
        <li className=" text-lg"><Link to='/onas'>O Nas</Link></li>
        <li className=" text-lg"><Link to='/blog'>Blog</Link></li>

        <li>
          <details>
            <summary className=" text-lg hover:">
              Oferty
            </summary>
            <ul className="p-2 bg-base-100">
              <li className="text-lg"><Link to='/oferta/stronyinternetowe'>Strony Internetowe</Link></li>
              <li className="text-lg"><Link to='/oferta/logotypy'>Logotypy</Link></li>
              <li className="text-lg"><Link to='/oferta/grafika'>Grafika Komputerowa</Link></li>
              <li className="text-lg"><Link to='/oferta/socialmedia'>Social Media</Link></li>
              <li className="text-lg"><Link to='/oferta/strategiareklamowa'>Strategia Reklamowa</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className=" text-lg hover:">
              Portfolio
            </summary>
            <ul className="p-2 bg-base-100">
              <li className="text-lg"><Link to='/portfolio/bqcarskatowice'>BQ Cars Katowice</Link></li>
              <li className="text-lg"><Link to='/portfolio/merkurymedica'>Merkury Medica</Link></li>
              <li className="text-lg"><Link to='/portfolio/oktechklimatyzacje'>Oktech Klimatyzacje</Link></li>
              <li className="text-lg"><Link to='/portfolio/wervasolutions'>Werva Solutions</Link></li>
            </ul>
          </details>
        </li>
        
        <li>
        <Link to='/kontakt'><div className="btn btn-primary">Kontakt</div></Link>
        </li>
        
      </ul>
    </section>
  </nav>
  )
}

export default Navbar
