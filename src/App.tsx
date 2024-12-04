import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/header.css";
import "../src/components/HamburgerMenu";
import Footer from "./pages/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import "./components/caroussel.css";
import NewBoats from "./pages/NewBoats";
import UsedBoats from "./pages/usedBoats";

function App() {
	return (
		<div>
			<Header />

			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/used" element={<UsedBoats />} />
					<Route
						path="/rental"
						element={
							<>
								<Home />
							</>
						}
					/>
					<Route path="/new" element={<NewBoats />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />{" "}
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
