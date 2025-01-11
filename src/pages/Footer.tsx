import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css"; // Importez le module CSS

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.footerLinks}>
					<a href="#about">About Us</a>
					<a href="#services">Services</a>
					<a href="#contact">Contact</a>
					<a href="#faq">FAQ</a>
				</div>

				<div className={styles.footerSocial}>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter />
					</a>
				</div>

				<div className={styles.footerCopyright}>
					&copy; {new Date().getFullYear()} MAZIZ. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
