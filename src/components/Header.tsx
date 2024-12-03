// Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import catamaran from "../../src/images/logo.png";
import HamburgerMenu from "./HamburgerMenu"; // Importez le menu hamburger


const Header: React.FC = () => {
	return (
		<div>
			<header className="nav">
				<div className="logo">
					<img src={catamaran} alt="Logo" />
				</div>
				<div className="desktop-navigation">
					<nav className="navigation">
						<Link to="/home">HOME</Link>
						<Link to="/new">NEW</Link>
						<Link to="/used">USED</Link>
						<Link to="/rental">RENTAL</Link>
						<Link className="contact" to="/contact">
							CONTACT US
						</Link>
					</nav>
				</div>
				<div className="mobile-navigation">
					<HamburgerMenu />
				</div>
			</header>
		</div>
	);
};

export default Header;
