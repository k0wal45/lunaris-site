import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from "./pages/NotFound";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Advanced from "./pages/Advanced";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";


function App() {

  return (
    <Router>

      <div className="flex flex-col">

        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onas" element={<About />} />
            <Route path="/oferta/:id" element={<Offer />}/>
            <Route path="/kontakt" element={ <Contact />} />
            <Route path='/portfolio/:id' element={<Portfolio />} />
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
