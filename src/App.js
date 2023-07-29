import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Advanced from "./pages/Advanced";

import Oferty from "./pages/Oferty";
import Grafika  from "./pages/offers/Grafika"
import Logotypy from "./pages/offers/Logotypy";
import Reklama from "./pages/offers/Reklama";
import SocialMedia from "./pages/offers/SocialMedia";
import StronyInternetowe from "./pages/offers/StronyInternetowe";

import Portfolio from "./pages/Portfolio";
import BQCarsKatowice from "./pages/portfolio/BQCarsKatowice";
import MerkuryMedica from "./pages/portfolio/MerkuryMedica";
import OktechKlimatyzacje from "./pages/portfolio/OktechKlimatyzacje";
import WervaSolutions from "./pages/portfolio/WervaSolutions";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PromoInfo from "./components/PromoInfo";


function App() {

  const htmlEl = document.querySelector('html')
  
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    htmlEl.dataset.theme = 'darkTheme'
  } else {
    htmlEl.dataset.theme = 'brightTheme'
  }

  return (
    <Router>

      <div className="flex flex-col h-screen">
        <PromoInfo />
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onas" element={<About />} />
            <Route path="/oferta" element={ <Oferty />} />
              <Route path="/oferta/grafika" element={ <Grafika />} />
              <Route path="/oferta/logotypy" element={ <Logotypy />} />
              <Route path="/oferta/strategiareklamowa" element={ <Reklama />} />
              <Route path="/oferta/socialmedia" element={ <SocialMedia />} />
              <Route path="/oferta/stronyinternetowe" element={ <StronyInternetowe />} />
            <Route path="/kontakt" element={ <Contact />} />
            <Route path="/blog" element={ <Blog />} />
            <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/portfolio/bqcarskatowice' element={<BQCarsKatowice />} />
              <Route path='/portfolio/merkurymedica' element={<MerkuryMedica />} />
              <Route path='/portfolio/oktechklimatyzacje' element={<OktechKlimatyzacje />} />
              <Route path='/portfolio/wervasolutions' element={<WervaSolutions />} />
            <Route path="/politykaprywatnosci" element={ <PolitykaPrywatnosci />} />
            <Route path="/advanced" element={ <Advanced />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
