import React from "react";
import makayAnchored from "../images/makay-anchored.jpeg";
import makayBabord from "../images/makay-babord.jpeg";
import makayCockpitRs from "../images/makay-cockpit-rs.jpeg";
import styles from "./makay.module.css";
import logoMakay from "../images/makayLogo.png";

const Makay: React.FC = () => {
	const makayCards = [
		{
			title: "Makay",
			image: makayAnchored,
			description:
				"The MAKAI M37 is designed to seamlessly blend luxury and performance, setting a new standard for powercats. Drawing inspiration from the timeless elegance and high performance of sports cars.",
		},
		{
			title: "Port-side cabin",
			image: makayBabord,
			description:
				"The M37 motor catamaran is configured with two cabins: a master cabin and a guest cabin.",
		},
		{
			title: "Makay Cockpit",
			image: makayCockpitRs,
			description:
				"The incredibly spacious cockpit area is among the largest in its class, setting a new standard for this model and boat size",
		},
	];

	return (
		<div>
			<div className={styles.makayWrapper}>
				<h2 className={styles.makayText}>Makay boats available for purchase</h2>
				<div className={styles.makayHeader}>
					<img src={logoMakay} alt="Makay Logo" className={styles.makayLogo} />
					<h1 className={styles.makayTitle}></h1>
				</div>

				<div className={styles.makayContainer}>
					{makayCards.map((makayCard, index) => (
						<div key={index} className={styles.makayCard}>
							<h2 className={styles.cardTitle}>{makayCard.title}</h2>
							<img
								src={makayCard.image}
								alt={makayCard.title}
								className={styles.makayImage}
							/>
							<p className={styles.cardDescription}>{makayCard.description}</p>
							<div className={styles.buttonContainer}>
								<button className={styles.viewDetailsButton}>
									View Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Makay;
