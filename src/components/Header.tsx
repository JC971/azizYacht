// Header.tsx
import React from "react";
import catamaran from "../../src/images/logo.png";
import HamburgerMenu from "./HamburgerMenu"; // Importez le menu hamburger


const Header: React.FC = () => {
	return (
		<div>
			<div className="nav">
				<header className="header">
					<div className="logo">
						<img src={catamaran} alt="Logo" />
					</div>
					<div className="desktop-navigation">
						<nav className="navigation">
							<a href="#home">NEW</a>
							<a href="#about">USED</a>
							<a href="#rental">RENTAL</a>
							<a href="#contact">CONTACT US</a>
						</nav>
					</div>
					<div className="mobile-navigation">
						{/* Affichez ce composant seulement sur les écrans mobiles */}
						<HamburgerMenu />
					</div>
				</header>
			</div>
		</div>
	);
};

export default Header;
