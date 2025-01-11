
import React from "react";
import { Link } from "react-router-dom";
import catamaran from "../../src/images/logo.png";
import HamburgerMenu from "./HamburgerMenu"; // Importez le menu hamburger
import { navigationLinks } from "../../navigationLinks"; // Importez les liens réutilisables

const Header: React.FC = () => {
	return (
		<div>
			<header className="nav">
				<div className="logo">
					<img src={catamaran} alt="Logo" />
					
				</div>
				<div className="desktop-navigation">
					<nav className="navigation">
						{navigationLinks.map((link) => (
							<Link key={link.path} to={link.path}>
								{link.label}
							</Link>
						))}
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
