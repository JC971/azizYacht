/*
import React from "react";
import Styles from "./newBoats.module.css";
import imageMirage33 from "../images/Mirage-33.jpg";
import imageOdyssey from "../images/odyssey-28.jpg";
import imageMirage18 from "../images/mirage_18.jpg";
import odyssey25 from "../images/odyssey-25.jpg";
import mirageAtSea from "../images/mirage-at-sea.jpg";
import odysseyAtSea from "../images/odyssey-at-sea.jpg"
import makayAnchored from "../images/makay-anchored.jpeg";
import makayBabord from "../images/makay-babord.jpeg";
import makayCockpitRs from "../images/makay-cockpit-rs.jpeg";

const NewBoats: React.FC = () => {
	const newCards = [
		{
			title: "Mirage 33",
			image: imageMirage33,
			description:
				"The Mirage 33 is the perfect boat for relaxation and leisure at sea. Combining simplicity and comfort, it offers an effortless way to enjoy peaceful moments on the water.",
		},
		{
			title: "Mirage",
			image: mirageAtSea,
			description:
				"The Mirage is ready for your next sea outing, offering reliable performance and a sleek design for smooth sailing and enjoyable adventures.",
		},
		{
			title: "Mirage 18",
			image: imageMirage18,
			description:
				"The Mirage 18 is ideal for families, offering space for pleasant days and nights of nautical camping. Its thoughtful design ensures comfort, autonomy, and unforgettable moments on the water.",
		},
		{
			title: "Odyssey 25",
			image: odyssey25,
			description:
				"The Odyssey 25 offers a compact yet versatile design, perfect for coastal cruising. With stylish lines and modern functionality, it provides an exceptional experience at sea.",
		},
		{
			title: "Odyssey",
			image: odysseyAtSea,
			description:
				"The Odyssey is built for adventure, featuring a robust design and excellent handling. Whether for short trips or extended journeys, it delivers performance and reliability.",
		},
		{
			title: "Odyssey 28",
			image: imageOdyssey,
			description:
				"Designed by STAMA Design, the Odyssey 28 combines sleek styling with elegant finishes. It is the perfect blend of performance and refinement for a premium boating experience.",
		},
		{
			title: "Makay",
			image: makayAnchored,
			description:
				"The Makai M37 redefines luxury and performance for powercats. With inspiration from the elegance of sports cars, it offers unmatched comfort and an innovative design.",
		},
		{
			title: "Port-side Cabin",
			image: makayBabord,
			description:
				"The M37 motor catamaran features two cabins: a spacious master cabin and a well-appointed guest cabin. Both provide the perfect balance of privacy and comfort.",
		},
		{
			title: "Makay Cockpit",
			image: makayCockpitRs,
			description:
				"The Makai M37 boasts one of the largest cockpits in its class. Designed for relaxation and socializing, it sets a new benchmark for comfort and style in this category.",
		},
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

export default NewBoats;
*/