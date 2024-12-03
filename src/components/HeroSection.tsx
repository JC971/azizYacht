
import styles from "./HeroSection.module.css"; 
import arrow from "../images/fleche-droite.png"
import Header from "./Header";

const HeroSection = () => {
	return (
		<div className={styles.heroSection}>
			<Header />
			<div className={styles.heroContent}>
				<h1>French Riviera<br/> To Tunisia</h1>
				<nav className={styles.heroNavigation}>
					<a href="#featured">
						
						BOATS FOR SALES
						<img src={arrow} alt="" className={styles.rightArrow} />
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
