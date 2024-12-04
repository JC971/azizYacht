
import styles from "./HeroSection.module.css"; 
import arrow from "../images/fleche-droite.png";
import Header from "./Header";
import {Link} from "react-router-dom"

const HeroSection = () => {
	return (
		<div className={styles.heroSection}>
			<Header />
			<div className={styles.heroContent}>
				<h1>
					French Riviera
					<br /> To Tunisia
				</h1>
				<nav className={styles.heroNavigation}>
					<Link to="/contact" className={styles.newModels}>
						BOATS FOR SALES
						<img src={arrow} alt="" className={styles.rightArrow} />
					</Link>
					<Link to="/contact">
						 SELL YOUR BOAT
						<img src={arrow} alt="" className={styles.rightArrow} />
					</Link>
				</nav>
				<p>
					Exclusive yacht sales, charter, and brokerage
					<br /> services on the French Riviera.
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
