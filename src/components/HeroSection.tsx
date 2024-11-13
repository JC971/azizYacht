
import styles from "./HeroSection.module.css"; 
import arrow from "../images/rightArrow.png"

const HeroSection = () => {
	return (
		<div className={styles.heroSection}>
			<div className={styles.heroContent}>
				<h1>French Riviera.<br/>To Tunisia</h1>
				<nav className={styles.heroNavigation}>
					<a href="#featured">
						<img src={arrow} alt="Flèche" className={styles.arrowIcon} />
						BOAT SALES
					</a>

					<a href="#chartering">
						<img src={arrow} alt="Flèche" className={styles.arrowIcon} />
						BOAT RENTAL
					</a>
					<a href="#brokerage">
						<img src={arrow} alt="Flèche" className={styles.arrowIcon} />
						BROKERAGE
					</a>
				</nav>
				<p>
					Exclusive yacht sales, charter, and brokerage<br/>  services on the French
					Riviera.
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
