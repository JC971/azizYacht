import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/header.css";
import "../src/components/HamburgerMenu"; // Ensure this file exports a valid component if used
import Footer from "./pages/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import "./components/caroussel.css";



function App() {
	return (
		<div>
			<Header />

			<div className="main-content">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/used" element={<div>Used Section Coming Soon</div>} />
					<Route
						path="/rental"
						element={
							<>
								<Home/>
							</>
						}
					/>
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />{" "}
				</Routes>
			</div>
		
			
			<Footer />
		</div>
	);
}

export default App;
