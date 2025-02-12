import mirage33 from "./images/Mirage-33.jpg";
import imageOdyssey from "./images/odyssey_28.jpg";
import imageMirage18 from "./images/mirage_18.jpg";

const cards = [
	{
		id: 1,
		title: "Mirage 33",
		image: mirage33, 
		description:
			"Le Mirage 33 est parfait pour la détente et les loisirs en mer. Alliant simplicité et fonctionnalité, il offre un aménagement confortable pour ceux qui recherchent des expériences de navigation sereines et agréables.",
		technicalDetails: {
			length: 33.5,
			width: 11.67,
			draft: 5,
			cabins: 2,
			maxMotorization: 740,
			passengerCapacity: 12,
		},
		teysisBoatsDescription: `Mirage 33 : Élégance et performance sur l'eau

Le Mirage 33 est un bateau d'exception qui incarne à la fois sophistication et puissance. Conçu pour les amateurs de navigation haut de gamme, ce modèle allie des lignes modernes à des performances remarquables.

Avec ses 33 pieds de longueur, il offre un espace généreux et bien aménagé, idéal pour des sorties en mer en famille ou entre amis. L'intérieur est pensé pour le confort, avec des matériaux de qualité supérieure et une finition irréprochable.

Côté motorisation, le Mirage 33 est équipé de moteurs performants, garantissant une navigation fluide et une maniabilité exemplaire, même à haute vitesse. Son design ergonomique et ses équipements modernes en font un choix parfait pour les passionnés de plaisance qui recherchent à la fois luxe et sensations.`,
	},
	{
		id: 2,
		title: "Odyssey 28",
		image: imageOdyssey,
		description:
			"Designed by STAMA Design, the Odyssey 28 stands out with its sleek profile and refined finishes. It offers an elegant design paired with outstanding performance, making it ideal for both style and functionality.",
		technicalDetails: {
			length: 28,
			width: 9.25,
			draft: 1.9,
			cabins: 2,
			maxMotorization: 450,
			passengerCapacity: 10,
		},
		teysisBoatsDescription: `The interior of the Odyssey 28 is thoughtfully designed to maximize space and comfort. The use of French oak wood imparts a modern and cozy ambiance. Standard interior upholstery is provided by ITALVIPLA's OPTIMA fabric, with various other options available upon request. The main cabin features a convertible salon that transforms into a double berth, an independent sleeping area for two, a fully equipped kitchen, and a bathroom with a manual toilet. These well-planned living spaces invite relaxation and socializing, making it ideal for family
         outings or adventures with friends. The Odyssey 28 by TESYS International is a meticulously designed vessel that harmoniously blends elegance with functionality. Crafted by STAMA Design, this boat is distinguished by its sleek profile and refined finishes.
The Odyssey 28 by TESYS International is a meticulously designed vessel that harmoniously blends elegance with functionality. Crafted by STAMA Design, this boat is distinguished by its sleek profile and refined finishes. 

The interior of the Odyssey 28 is thoughtfully designed to maximize space and comfort. The use of French oak wood imparts a modern and cozy ambiance. Standard interior upholstery is provided by ITALVIPLA's OPTIMA fabric, with various other options available upon request. The main cabin features a convertible salon that transforms into a double berth,
an independent sleeping area for two, a fully equipped kitchen, and a bathroom with a manual toilet. These well-planned living spaces invite relaxation and socializing, making it ideal for family outings or adventures with friends.
Hot water heater
Deck lighting in LED
Exterior stainless steel sink
Underwater lighting
Microwave
Luxury Package:

Teak deck covering
Exterior upholstery by ITALVIPLA TROPICAL
Interior upholstery by ITALVIPLA FELIX
Convertible interior salon into a berth
TV with DVD player and Glomex antenna
Electric toilet
Infinity Package:
Air conditioning (9,000 BTU)
Safety equipment
GPS sonar combo
Console protective cover
Automatic pilot
Preparation and launching
Bow thruster
VHF radio
Transport trailer
Camping cover
The Odyssey 28 is designed to provide an exceptional boating experience, combining performance, comfort, and style. Its well-thought-out features and optional packages allow for customization to meet various preferences and needs.`,
	},
	{
		id: 3,
		title: "Mirage 18",
		image: imageMirage18,
		description:
			"The Mirage 18 is ideal for families, offering space for pleasant days and nights of nautical camping. Its thoughtful design ensures comfort, autonomy, and unforgettable moments on the water.",
		technicalDetails: {
			length: 18,
			width: 8,
			draft: 1.1,
			cabins: 1,
			maxMotorization: 150,
			passengerCapacity: 6,
		},
		teysisBoatsDescription: `The Mirage 18 by TESYS is a compact yet versatile boat designed for families and small groups. Perfect for day trips or nautical camping, it offers an ideal combination of comfort and practicality. Its lightweight and easy-to-handle structure make it suitable for various water activities, including fishing, cruising, and relaxing by the shore.
With its thoughtful design, the Mirage 18 maximizes space and functionality, providing ample room for passengers while maintaining a streamlined profile for better performance. The Mirage 18's seating layout and storage options are optimized for convenience, making it an excellent choice for first-time boat owners or those seeking simplicity without compromising on quality.`,
	},
];

export default cards;
