/*
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/header.css";
import "../src/components/HamburgerMenu";
import Footer from "./pages/Footer";

import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";


import UsedBoats from "./pages/usedBoats";
import CookiePopup from "./components/cookiePopup.tsx";
import "../styles/popup.css";
import Header from "./components/Header.tsx";
import FAQ from "./components/Faq.tsx";
import TeysisDescriptions from "./teysisDescriptions.tsx";
import Rental from "./components/Rental.tsx";
import Teysis from "./components/Teysis.tsx";

import Services from "./components/Services.tsx";

function App() {
	return (
		<div>
			<CookiePopup />

			<Header />

			
			<div className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/used" element={<UsedBoats />} />
					<Route
						path="/rental"
						element={
							<>
								<Rental />
							</>
						}
					/>
					<Route
						path="/home/teysis/details/:id"
						element={<TeysisDescriptions />}
					/>
					<Route path="/new" element={<Teysis />} />
					<Route path="/contact" element={<Contact />} />
				
					<Route path="/faq" element={<FAQ />} />
					<Route path="/Services" element={<Services />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>

			
			<Footer />
		</div>
	);
}

export default App;
*/
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/header.css";
import "../styles/popup.css";

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
import BoatDetails from "./BoatDetails"; // Nouvelle page des détails des bateaux

function App() {
	return (
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
					

					{/* Route dynamique pour les détails d’un bateau */}
					<Route path="/home/teysis/details/:id" element={<BoatDetails />} />

					{/* Page 404 si la route n'existe pas */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
