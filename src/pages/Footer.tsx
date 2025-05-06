import React from "react";
//import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css"; // Importez le module CSS
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.footerLinks}>
					<Link to="/services">Services</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/faq">FAQ</Link>
				</div>
				<Link to="/Confidentialite">Politique de confidentialité</Link>
				{/* 
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
				
*/}
				
				
				<div className={styles.footerCopyright}>
					&copy; {new Date().getFullYear()} MAZIZ. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
