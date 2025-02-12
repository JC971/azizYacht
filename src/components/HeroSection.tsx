import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={styles.heroSection}
			style={{
				opacity: Math.max(1 - scrollPosition / 300, 0.3),
				pointerEvents: scrollPosition > 300 ? "none" : "auto",
			}}
		>
			
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>
				m. aziz yachting
				</h1>
				<nav className={styles.heroNavigation}>
					<Link to="/new" className={styles.navLink}>
						BATEAUX NEUFS
					</Link>
					<Link to="/used"  className={styles.navLink}>
						BATEAUX D'OCCASIONS
					</Link>
					
				</nav>
				<p className={styles.heroText}>
					French Riviera to Tunisia
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
