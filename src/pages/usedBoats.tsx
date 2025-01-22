import React from "react";
//import Styles from "./newBoats.module.css";
import Styles from "./usedBoats.module.css"

const UsedBoats: React.FC = () => {
	const newCards = [
		{
			title: "Grand Tourismo",
			image: "/images/grand-turismo-1.jpg",
			description:
				"The GT 41 is designed for enjoyment at sea, combining sleek styling and great handling. It features a spacious aft sun pad, a large U-shaped lounge, an outdoor kitchen for dining, and two private cabins with beds perfectly aligned for optimal comfort.",
		},
		{
			title: "Helm station",
			image: "/images/grand-turismo-3-1.jpg",
			description:
				"The helm station provides a commanding view with a sleek, ergonomic layout. Equipped with modern navigation tools, it ensures smooth control and safe operation, even under challenging conditions, while offering a comfortable driving experience.",
		},

		{
			title: "Saloon",
			image: "/images/grand-turismo-4.jpg",
			description:
				"The saloon is a perfect space for families, offering ample seating and a relaxing atmosphere. It allows for shared moments of joy, whether during a lively meal or a quiet evening, ensuring comfort and autonomy on the water.",
		},
		{
			title: "Forward Cabin",
			image: "/images/grand-turismo-6.jpg",
			description:
				"The forward cabin offers a peaceful retreat with a spacious double bed and natural light from skylights. Designed for extended journeys, it provides thoughtful storage and a relaxing atmosphere, ideal for a comfortable night's rest.",
		},
		{
			title: "Owner's Cabin",
			image: "/images/grand-turismo-6-1.jpg",
			description:
				"The owner's cabin is a luxurious sanctuary with a queen-size bed, elegant furnishings, and large windows for natural light. Featuring an ensuite bathroom and generous storage, it combines style and comfort for longer stays aboard.",
		},
		{
			title: "Portside Cabin",
			image: "/images/grand-turismo-6-2.jpg",
			description:
				"The portside cabin is cozy and versatile, with twin beds that convert into a double. Cleverly designed storage, ample lighting, and practical layout make it ideal for accommodating guests or additional needs with ease.",
		},
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
