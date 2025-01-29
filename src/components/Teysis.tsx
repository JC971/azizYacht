import React from "react";
import { Link } from "react-router-dom";
import styles from "./teysis.module.css";
import imageMirage33 from "../images/Mirage-33.jpg";
import imageOdyssey from "../images/odyssey-28.jpg";
import imageMirage18 from "../images/mirage_18.jpg";
import logoTeysis from "../images/logo.png";

const Teysis: React.FC = () => {
	const cards = [
		{
			id:1,
			title: "Mirage 33",
			image: imageMirage33,
			description:
				"The Mirage 33 is perfect for relaxation and leisure at sea. Combining simplicity and functionality, it offers a comfortable layout for those seeking serene and enjoyable boating experiences.",
		},
		{
			id: 2,
			title: "Odyssey 28",
			image: imageOdyssey,
			description:
				"Designed by STAMA Design, the Odyssey 28 stands out with its sleek profile and refined finishes. It offers an elegant design paired with outstanding performance, making it ideal for both style and functionality.",
		},
		{
			id:3,
			title: "Mirage 18",
			image: imageMirage18,
			description:
				"The Mirage 18 is ideal for families, offering space for pleasant days and nights of nautical camping. Its thoughtful design ensures comfort, autonomy, and unforgettable moments on the water.",
		},
	];

	return (
		<>
			<h2 className={styles.teysisTitle}>Boats available for purchase</h2>
			<span className={styles.logTeysis}>
				<Link to="/new">
					<img
						src={logoTeysis}
						alt="Teysis logo"
						className={styles.logoImage}
					/>
				</Link>
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
						<Link to={`/home/teysis/details/${card.id}`}>
						<button className={styles.viewDetailsButton}>View Details</button>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Teysis;
