import { Routes, Route } from "react-router-dom";
import "./App.css";

import "../styles/popup.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import CookiePopup from "./components/cookiePopup";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import UsedBoats from "./pages/usedBoats";
import Rental from "./components/Rental";
import Services from "./components/Services";
import FAQ from "./components/Faq";
import NotFound from "./components/NotFound";

import Teysis from "./components/Teysis"; // Page des bateaux neufs
import TeysisDescriptions from "./teysisDescriptions"; // ✅ Correction ici
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
	return (
		<ParallaxProvider>
			<div>
				<CookiePopup />
				<Header />

				{/* Contenu principal */}
				<div className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/used" element={<UsedBoats />} />
						<Route path="/rental" element={<Rental />} />
						<Route path="/new" element={<Teysis />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/faq" element={<FAQ />} />
						<Route path="/services" element={<Services />} />

						{/* ✅ Route dynamique correcte pour afficher les détails d'un bateau */}
						<Route path="/home/teysis/details/:id" element={<TeysisDescriptions />} />

						{/* Page 404 si la route n'existe pas */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>

				<Footer />
			</div>
		</ParallaxProvider>
	);
}

export default App;
