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
				"The MIRAGE 33 is the boat for relaxation and leisure at sea in complete simplicity.",
		},
		{
			title: "MIRAGE",
			image: mirageAtSea,
			Description: "Ready for a sea outing",
		},

		{
			title: "Mirage 18",
			image: imageMirage18,
			description:
				"Ideal for families, allowing them to enjoy pleasant days and nights of nautical camping in complete autonomy.",
		},
		{
			title: "Odyssey 25",
			image: odyssey25,
			Description: "",
		},
		{
			title: "ODYSSEY",
			image: odysseyAtSea,
			Description: "",
		},
		{
			title: "Odyssey 28",
			image: imageOdyssey,
			description:
				"Designed by STAMA Design, the ODYSSEY 28 stands out for its sleek appearance and elegant finishes.",
		},
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
