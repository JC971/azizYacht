import styles from "./HeroSection.module.css";
import arrow from "../images/fleche-droite.png";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition((prev) => prev + (window.scrollY - prev) * 0.1);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={styles.heroSection}
			style={{
				position: "relative",
				transform: `translateY(${scrollPosition * 0.5}px)`,
				opacity: 1 - scrollPosition / 1000
			}}
		>
			
			<div className={styles.heroContent}>
				<h1>
					French Riviera
					<br /> To Tunisia
				</h1>
				<nav className={styles.heroNavigation}>
					<Link to="/contact" className={styles.newModels}>
						BOATS FOR SALE
						<img src={arrow} alt="" className={styles.rightArrow} />
					</Link>
					<Link to="/contact" className={styles.usedModels}> 
						LIST YOUR BOAT
						<img src={arrow} alt="" className={styles.rightArrow} />
					</Link>
				</nav>
				<p className={styles.heroText}>
					Discover exclusive yacht sales,
					<br /> luxury charters, and premium brokerage services <br /> along
					the stunning French Riviera.
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
