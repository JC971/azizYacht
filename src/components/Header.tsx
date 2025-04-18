
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logHome from "../../src/images/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import { navigationLinks } from "../../navigationLinks";
import styles from "../../styles/Header.module.css"; // Conversion en CSS Module

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo}>
					<img
						src={logHome}
						alt="M. Aziz Yachting Logo"
						className={styles.logoImage}
					/>
				</Link>

				<div className={styles.desktopNavigation}>
					{navigationLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`${styles.navLink} ${
								location.pathname === link.path ? styles.active : ""
							}`}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className={styles.mobileNavigation}>
					<HamburgerMenu />
				</div>
			</div>
		</nav>
	);
};

export default Header;


