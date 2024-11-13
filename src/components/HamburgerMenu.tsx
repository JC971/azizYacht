import React, { useState } from "react";
import "../hamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburger-menu">
			<button
				className="menu-toggle"
				onClick={toggleMenu}
				aria-label="Toggle navigation"
			>
				&#9776;
			</button>
			{isOpen && (
				<nav className={`navigation ${isOpen ? "show" : ""}`}>
					<a href="#home">NEW</a>
					<a href="#about">USED</a>
					<a href="#rental">RENTAL</a>
					<a href="#contact">CONTACT US</a>
				</nav>
			)}
		</div>
	);
};

export default HamburgerMenu;
