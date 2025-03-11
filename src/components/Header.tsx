
import React from "react";
import { Link } from "react-router-dom";
import logHome from "../../src/images/logo.png";
import HamburgerMenu from "./HamburgerMenu"; // 
import { navigationLinks } from "../../navigationLinks"; //  liens réutilisables

const Header: React.FC = () => {
	return (
		<div>
			<header className="nav">
				<div className="logo">
					<Link to="/">
						<img src={logHome} alt="Logo" />
					</Link>
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
