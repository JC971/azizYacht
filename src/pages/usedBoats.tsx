import React from "react";
//import Styles from "./newBoats.module.css";
import Styles from "./usedBoats.module.css"

const UsedBoats: React.FC = () => {
	const newCards = [
		{
			title: "Grand Tourismo",
			image: "/images/grand-turismo-1.jpg",
			description: "",
		},
		{
			title: "Helm station",
			image:"/images/grand-turismo-3-1.jpg",
			Description: "Helm station",
		},

		{
			title: "Saloon",
			image: "/images/grand-turismo-4.jpg",
			description:
				"Ideal for families, allowing them to enjoy pleasant days and nights of nautical camping in complete autonomy.",
		},
		{
			title: "Forward Cabin",
			image: "/images/grand-turismo-6.jpg",
			Description: "dfgsdfg",
		},
		{
			title: "Owner's Cabin",
			image: "/images/grand-turismo-6-1.jpg",
			Description: "dfgs dfgssdfg",
		},
		{
			title: "Portside Cabin",
			image: "/images/grand-turismo-6-2.jpg",
			description:"dfgsdsfg",
		}
	];
	return (
		<>
			<h2 className={Styles.newCardsTitle}>used boats available for purchase</h2>
			<div className={Styles.newCardsContainer}>
				{newCards.map((newCard, index) => (
					<div key={index} className={Styles.newCard}>
						<h3 className={Styles.newCardTitle}>{newCard.title}</h3>
						<img src={newCard.image} className={Styles.newCardImage} />
						<p className={Styles.usedCardDescription}>{newCard.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default UsedBoats;
