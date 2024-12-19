
import React from "react";
import Styles from "./newBoats.module.css";

import grandTourismo1 from "../images/grand-turismo-1.jpg";
import grandturismo2 from "../images/grand-turismo-3-1.jpg";
//import grandturismo3 from "../images/grand-turismo-3-1.jpg";
//import grandturismo4 from "../images/grand-turismo-3.jpg";
import grandturismo5 from "../images/grand-turismo-4.jpg";
//import grandturismo6 from "../images/grand-turismo-5.jpg";
import grandturismo7 from "../images/grand-turismo-6-2.jpg"
import grandturismoFc from "../images/grand-turismo-6.jpg"
import grandturismoMc from "../images/grand-turismo-6-1.jpg"

const UsedBoats: React.FC = () => {
	const newCards = [
		{
			title: "Grand Tourismo",
			image: grandTourismo1,
			description: "",
		},
		{
			title: "Helm station",
			image: grandturismo2,
			Description: "Helm station",
		},

		{
			title: "Saloon",
			image: grandturismo5,
			description:
				"Ideal for families, allowing them to enjoy pleasant days and nights of nautical camping in complete autonomy.",
		},
		{
			title: "Forward Cabin",
			image: grandturismoFc,
			Description: "",
		},
		{
			title: "Owner's Cabin",
			image: grandturismoMc,
			Description: "",
		},
		{
			title: "Portside Cabin",
			image: grandturismo7,
			description:
				"",
		}
	];
	return (
		<div className={Styles.newCardsContainer}>
			{newCards.map((newCard, index) => (
				<div key={index} className={Styles.newCard}>
					<h3 className={Styles.newCardTitle}>{newCard.title}</h3>
					<img src={newCard.image} className={Styles.newCardImage} />
					<p className={Styles.newCardDescription}>{newCard.description}</p>
				</div>
			))}
		</div>
	);
};

export default UsedBoats;
