import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/header.css";
import "../src/components/HamburgerMenu";
import Footer from "./pages/Footer";

import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import "./components/caroussel.css";

import UsedBoats from "./pages/usedBoats";
import CookiePopup from "./components/cookiePopup.tsx";
import "../styles/popup.css";
import Header from "./components/Header.tsx";
import MakayDescriptions from "./components/makayDescriptions.tsx";
import TeysisDescriptions from "./teysisDescriptions.tsx";
import Rental from "./components/Rental.tsx";
import Teysis from "./components/Teysis.tsx";
//import NewDescription from "./pages/newDescription.tsx";

function App() {
	return (
		<div>
			<CookiePopup />

			<Header />

			{/* Contenu principal avec espace pour le Header */}
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

					<Route
						path="/home/makay/details/:id"
						element={<MakayDescriptions />}
					/>
					<Route path="/new" element={<Teysis />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;