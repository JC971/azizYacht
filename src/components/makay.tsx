import React from "react";
import { Link } from "react-router-dom";
import makayAnchored from "../images/makay-anchored.jpeg";
import makayBabord from "../images/makay-babord.jpeg";
import makayCockpitRs from "../images/makay-cockpit-rs.jpeg";
import styles from "./makay.module.css";
import logoMakay from "../images/makayLogo.png";

const Makay: React.FC = () => {
	const makayCards = [
		{
			id: 1,
			title: "Makay 37",
			image: makayAnchored,
			description:
				"The MAKAI M37 seamlessly combines luxury and performance, redefining powercat standards. Inspired by the timeless elegance of sports cars, it delivers unmatched comfort and exceptional design.",
		},
		{
			id: 2,
			title: "Port-side Cabin",
			image: makayBabord,
			description:
				"The M37 motor catamaran features two well-appointed cabins: a spacious master cabin and a comfortable guest cabin. Both are designed for relaxation and privacy during your journeys.",
		},
		{
			id: 3,
			title: "Makay Cockpit",
			image: makayCockpitRs,
			description:
				"The Makay M37 boasts an exceptionally spacious cockpit, one of the largest in its class. Designed for socializing and relaxation, it sets a new benchmark for boats of its size.",
		},
	];

	return (
		<div>
			<div className={styles.makayWrapper}>
				<h2 className={styles.makayText}>Makay boats available for purchase</h2>
				<div className={styles.makayHeader}>
					<Link to="/new">
						<img
							src={logoMakay}
							alt="Makay Logo"
							className={styles.makayLogo}
						/>
					</Link>
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
								<Link to={`/home/makay/details/${makayCard.id}`}>
									<button className={styles.viewDetailsButton}>
										View Details
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Makay;
