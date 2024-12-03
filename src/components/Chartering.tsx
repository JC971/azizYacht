import React from "react";
import styles from './Chartering.module.css';  
import arrow from "../images/rightArrow.png";


const Chartering: React.FC = () => {
	return (
		<div className={styles.charteringContainer}>
			<div className={styles.charteringContent}>
				<div className={styles.charteringTitle}>Chartering</div>
				<div className={styles.charteringText}>
					Experience the ultimate in luxury with Maziz Yachting's <br />
					bespoke charter services
				</div>
				<div className={styles.projectContainer}>
					<a href="#project">
						<img src={arrow} alt="Flèche" className={styles.arrowIcon} />
						See project
					</a>
				</div>
			</div>
		</div>
	);
};

export default Chartering;
