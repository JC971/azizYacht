import React from "react";
import styles from "./teysis.module.css";
import imageMirage33 from "../images/Mirage-33.jpg";
import imageOdyssey from "../images/odyssey-28.jpg";
import imageMirage18 from "../images/mirage_18.jpg";
import logoTeysis from "../images/logo.png";

const Teysis: React.FC = () => {
	const cards = [
		{
			title: "Mirage 33",
			image: imageMirage33,
			description:
				"The MIRAGE 33 is the boat for relaxation and leisure at sea in complete simplicity.",
		},
		{
			title: "Odyssey 28",
			image: imageOdyssey,
			description:
				"Designed by STAMA Design, the ODYSSEY 28 stands out for its sleek appearance and elegant finishes.",
		},
		{
			title: "Mirage 18",
			image: imageMirage18,
			description:
				"Ideal for families, allowing them to enjoy pleasant days and nights of nautical camping in complete autonomy.",
		},
	];

	return (
		<>
			<h2 className={styles.teysisTitle}>Boats available for purchase</h2>
			<span className={styles.logTeysis}>
				<img src={logoTeysis} alt="Teysis logo" className={styles.logoImage} />
			</span>
			<div className={styles.cardsContainer}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<h2 className={styles.cardTitle}>{card.title}</h2>
						<div className={styles.cardImageContainer}>
							<img
								src={card.image}
								alt={card.title}
								className={styles.cardImage}
							/>
						</div>
						<p className={styles.cardDescription}>{card.description}</p>
						<button className={styles.viewDetailsButton}>View Details</button>
					</div>
				))}
			</div>
		</>
	);
};

export default Teysis;
