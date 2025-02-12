import React from "react";
import styles from "../../styles/homeUsed.module.css";
import { Link } from "react-router-dom";

const HomeUsed: React.FC = () => {
	const usedBoats = [
		{
			title: "Bateau à vendre",
			image: "/images/boat-for-sale.jpeg",
			description: "Un bateau en excellent état.",
		},
		{
			title: "Grand Turismo 3.1",
			image: "/images/grand-turismo-3-1.jpg",
			description: "Un modèle sportif et élégant.",
		},
		{
			title: "Grand Turismo 7",
			image: "/images/grand-turismo-7.jpg",
			description: "Performance et luxe réunis.",
		},
	];

	return (
		<>
			<Link to="/used">
				<h2 className={styles.title}>Nos bateaux d'occasion</h2>
			</Link>
			<div className={styles.containerUsed}>
				<div className={styles.boatsList}>
					{usedBoats.map((boat, index) => (
						<div key={index} className={styles.boatCard}>
							<Link to="/used">
								<img
									src={boat.image}
									alt={boat.title}
									className={styles.boatImage}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HomeUsed;
