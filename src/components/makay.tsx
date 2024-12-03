import React from "react";
import makayAnchored from '../images/makay-anchored.jpeg';
import makayBabord from '../images/makay-babord.jpeg';
import makayCockpitRs from '../images/makay-cockpit-rs.jpeg'
import styles from "./makay.module.css";
import logoMakay from "../images/makayLogo.png"

const Makay: React.FC = () => {
    const makayCards = [
			{
				title: "Makay",
				image: makayAnchored,
				description: "",
			},
			{
				title: "Port-side cabin",
				image: makayBabord,
				description: "",
			},
			{
				title: "Makay Cockpit",
				image: makayCockpitRs,
				description: "",
			},
		];

    return (
			<div>
				<div className={styles.makayWrapper}>
					<header className={styles.makayHeader}>
						<img
							src={logoMakay}
							alt="Makay Logo"
							className={styles.makayLogo}
						/>
						<h1 className={styles.makayTitle}></h1>
					</header>

					
					<div className={styles.makayContainer}>
						{makayCards.map((makayCard, index) => (
							<div key={index} className={styles.makayCard}>
								<h2 className={styles.cardTitle}>{makayCard.title}</h2>
								<img
									src={makayCard.image}
									alt={makayCard.title}
									className={styles.makayImage}
								/>
								<p className={styles.cardDescription}>
									{makayCard.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
};
    
export default Makay;

