import React, { useState } from "react";
import "../hamburgerMenu.css";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../navigationLinks"; // Importez les liens

const HamburgerMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburger-menu">
			{/* Bouton pour ouvrir/fermer le menu */}
			<button
				className="menu-toggle"
				onClick={toggleMenu}
				aria-label="Toggle navigation"
			>
				&#9776;
			</button>

			{/* Menu affiché conditionnellement */}
			{isOpen && (
				<nav className={`navigation ${isOpen ? "show" : ""}`}>
					{/* Utilisez la liste des liens réutilisables */}
					{navigationLinks.map((link) => (
						<Link key={link.path} to={link.path} className="nav-link" onClick={toggleMenu}>
							{link.label}
						</Link>
					))}
				</nav>
			)}
		</div>
	);
};

export default HamburgerMenu;
