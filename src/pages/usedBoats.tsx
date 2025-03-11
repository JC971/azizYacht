import React from "react";
//import Styles from "./newBoats.module.css";
import Styles from "./usedBoats.module.css"

const UsedBoats: React.FC = () => {
	const newCards = [
		{
			title: "Tourismo",
			image: "/images/grand-turismo-1.jpg",
			description:
				"Le GT 41 est conçu pour le plaisir en mer, alliant un design élégant et une excellente maniabilité. Il dispose d'un vaste bain de soleil arrière, d'un grand salon en U, d'une cuisine extérieure pour les repas et de deux cabines privées avec des lits parfaitement alignés pour un confort optimal.",
		},
		{
			title: "Poste de pilotage",
			image: "/images/grand-turismo-3-1.jpg",
			description:
				"La station de pilotage offre une vue dominante avec une disposition élégante et ergonomique. Équipée d'outils de navigation modernes, elle garantit un contrôle fluide et une utilisation sécurisée, même dans des conditions difficiles, tout en assurant une expérience de conduite confortable.",
		},

		{
			title: "Carré",
			image: "/images/grand-turismo-4.jpg",
			description:
				"Le salon est un espace idéal pour les familles, offrant de larges assises et une atmosphère relaxante. Il permet de partager des moments de joie, que ce soit lors d’un repas animé ou d’une soirée paisible, assurant confort et autonomie sur l’eau.",
		},
		{
			title: "Cabine avant",
			image: "/images/grand-turismo-6.jpg",
			description:
				"La cabine avant offre un refuge paisible avec un lit double spacieux et une lumière naturelle provenant des puits de lumière. Conçue pour les voyages prolongés, elle dispose de rangements bien pensés et d'une atmosphère relaxante, idéale pour une nuit de repos confortable.",
		},
		{
			title: "Cabine du propriétaire",
			image: "/images/grand-turismo-6-1.jpg",
			description:
				"La cabine du propriétaire est un sanctuaire luxueux avec un lit queen-size, un mobilier élégant et de grandes fenêtres laissant entrer la lumière naturelle. Dotée d’une salle de bain privative et de nombreux rangements, elle allie style et confort pour de longs séjours à bord.",
		},
		{
			title: "Cabine babord",
			image: "/images/grand-turismo-6-2.jpg",
			description:
				"La cabine bâbord est chaleureuse et polyvalente, avec des lits jumeaux convertibles en lit double. Son agencement astucieux, ses rangements bien pensés et son éclairage généreux en font un espace idéal pour accueillir des invités ou répondre à des besoins supplémentaires en toute simplicité.",
		},
	];
	return (
		<>
			<h2 className={Styles.newCardsTitle}>used boats available for purchase</h2>
			<div className={Styles.newCardsContainer}>
				{newCards.map((newCard, index) => (
					<div key={index} className={Styles.newCard}>
						<h3 className={Styles.usedCardTitle}>{newCard.title}</h3>
						<img src={newCard.image} className={Styles.newCardImage} />
						<p className={Styles.usedCardDescription}>{newCard.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default UsedBoats;
