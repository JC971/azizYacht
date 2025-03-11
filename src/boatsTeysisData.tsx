// Description: Data for the boats section of the website.
import mirage33 from "./images/mirage33Accueil.jpeg";
//import imageOdyssey from "./images/odyssey_28.jpg";
//import imageMirage18 from "./images/mirage_18.jpg";
//import mirage26 from "./images/mirage_26.jpg";
import mirage332 from "./images/mirage33-2.jpg";
import intermirage33 from "./images/interieurmirage33.jpg";
import mirage301 from "./images/mirage30-1.jpg";
import mirage302 from "./images/mirage302.jpg";
import odyssey281 from "./images/odyssey28-1.png";
import odyssey282 from "./images/odyssey282.jpg";
import odyssey283 from "./images/odyssey283.jpg";

import mirage303 from "./images/mirage303.jpg";
import mirage261 from "./images/mirage261.jpg";
import mirage262 from "./images/mirage262.jpg";
import mirage263 from "./images/mirage263.jpg";
import mirage231 from "./images/mirage231.jpg";
import mirage232 from "./images/mirage232.jpg";
import mirage233 from "./images/mirage233.jpg";
import odyssey251 from "./images/odyssey251.jpg";
import odyssey252 from "./images/odyssey252.jpg";
import odyssey253 from "./images/odyssey253.jpg";	

//descriptif bateaux neufs
const cardsTech = [
	{
		id: 1,
		title: "Mirage 33",

		images: [intermirage33, mirage332, mirage33],
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
		images: [odyssey281, odyssey282, odyssey283],
		description:
			"L'Odyssey 28 de TESYS International est un navire méticuleusement conçu qui allie harmonieusement élégance et fonctionnalité. Conçu par STAMA Design, ce bateau se distingue par son profil élancé et ses finitions raffinées. L'intérieur de l'Odyssey 28 est soigneusement pensé pour optimiser l'espace et le confort. L'utilisation de bois de chêne français apporte une ambiance moderne et cosy. Le rembourrage intérieur standard est assuré par le tissu OPTIMA d'ITALVIPLA, avec d'autres options disponibles sur demande. La cabine principale comprend un salon convertible en couchage double, un espace de couchage indépendant pour deux, une cuisine complète et une salle de bain avec toilettes manuelles. Ces espaces de vie bien aménagés favorisent la relaxation et les interactions sociales, parfaits pour des escapades en famille ou entre amis.",
		technicalDetails: {
			length: 28,
			width: 9.25,
			draft: 1.9,
			cabins: 2,
			maxMotorization: 450,
			passengerCapacity: 10,
		},
		teysisBoatsDescription: `L'intérieur de l'Odyssey 28 est intelligemment conçu pour maximiser l'espace et le confort. L'utilisation de bois de chêne français confère une ambiance moderne et chaleureuse. Le rembourrage intérieur standard est fourni par le tissu OPTIMA d'ITALVIPLA, avec diverses autres options disponibles sur demande. La cabine principale dispose d'un salon convertible qui se transforme en un couchage double, d'un espace de couchage indépendant pour deux personnes, d'une cuisine entièrement équipée et d'une salle de bain avec des toilettes manuelles. Ces espaces de vie bien pensés invitent à la détente et à la convivialité, ce qui en fait un choix idéal pour des sorties en famille ou des aventures entre amis.

L'Odyssey 28 de TESYS International est un navire méticuleusement conçu qui allie harmonieusement élégance et fonctionnalité. Conçu par STAMA Design, ce bateau se distingue par son profil élancé et ses finitions raffinées. L'intérieur de l'Odyssey 28 est soigneusement pensé pour optimiser l'espace et le confort. L'utilisation de bois de chêne français apporte une ambiance moderne et cosy. Le rembourrage intérieur standard est assuré par le tissu OPTIMA d'ITALVIPLA, avec d'autres options disponibles sur demande. La cabine principale comprend un salon convertible en couchage double, un espace de couchage indépendant pour deux, une cuisine complète et une salle de bain avec toilettes manuelles. Ces espaces de vie bien aménagés favorisent la relaxation et les interactions sociales, parfaits pour des escapades en famille ou entre amis.

Chauffe-eau
Éclairage de pont en LED
Évier extérieur en acier inoxydable
Éclairage sous-marin
Micro-ondes
Pack Luxe :

Revêtement de pont en teck
Rembourrage extérieur par ITALVIPLA TROPICAL
Rembourrage intérieur par ITALVIPLA FELIX
Salon intérieur convertible en couchage
Téléviseur avec lecteur DVD et antenne Glomex
Toilettes électriques
Pack Infini :

Climatisation (9 000 BTU)
Équipement de sécurité
Combiné GPS et sonar
Housse de protection pour la console
Pilote automatique
Préparation et mise à l'eau
Propulseur d'étrave
Radio VHF
Remorque de transport
Couverture de camping
L'Odyssey 28 est conçu pour offrir une expérience de navigation exceptionnelle, alliant performance, confort et style. Ses caractéristiques bien pensées et ses packs optionnels permettent une personnalisation adaptée à divers préférences et besoins.`,
	},
	{
		id: 3,
		title: "Mirage 30",
		images: [mirage301, mirage302, mirage303],
		description:
			"Le Mirage 30 est un bateau de la gamme Oceanic Line du constructeur TESYS International, reconnu pour ses performances et son design original.",
		technicalDetails: {
			length: 30,
			width: 10.5,
			draft: 4.8,
			cabins: 2,
			maxMotorization: 150,
			passengerCapacity: 16,
		},
		teysisBoatsDescription: `Le Mirage 18 de TESYS est un bateau compact mais polyvalent, conçu pour les familles et les petits groupes. Idéal pour des excursions d’une journée ou du camping nautique, il offre une combinaison parfaite de confort et de praticité. Sa structure légère et facile à manœuvrer le rend adapté à diverses activités aquatiques, telles que la pêche, la croisière ou la détente au bord de l’eau.

Grâce à sa conception réfléchie, le Mirage 18 maximise l’espace et la fonctionnalité, offrant suffisamment de place pour les passagers tout en conservant un profil épuré pour de meilleures performances. La disposition des sièges et les options de rangement du Mirage 18 sont optimisées pour plus de commodité, ce qui en fait un excellent choix pour les propriétaires de bateaux novices ou ceux qui recherchent la simplicité sans compromettre la qualité.`,
	},
	{
		id: 4,
		title: "Mirage 26",
		images: [mirage261, mirage262, mirage263],
		description:
			"Le Mirage 18 est idéal pour les familles, offrant de l'espace pour des journées agréables et des nuits de camping nautique. Sa conception réfléchie garantit confort, autonomie et des moments inoubliables sur l'eau.",
		technicalDetails: {
			length: 7.85,
			width: 2.9,
			draft: 1.1,
			cabins: 1,
			maxMotorization: 400,
			passengerCapacity: 14,
		},
		teysisBoatsDescription: `Le MIRAGE 26, plus grand que son cadet le MIRAGE 23 d’un mètre, permet l’intégration d’une petite cabine qui ajoutera du confort à vos 
activités maritimes. Idéal pour vos croisières, vous y trouverez tout le confort nécessaire en famille ou entre amis.`,
	},
	{
		id: 5,
		title: "Mirage 23",
		images: [mirage231, mirage232, mirage233],
		description:
			"Le Mirage 23 de TESYS International est un bateau polyvalent conçu pour allier performance, confort et sécurité en mer. Il est idéal pour les sorties en famille, la pêche ou les loisirs nautiques.",
		technicalDetails: {
			length: 7,
			width: 2.8,
			draft: 1.1,
			cabins: 0,
			maxMotorization: 250,
			passengerCapacity: 10,
		},
		teysisBoatsDescription: `Sa carène est spécialement étudiée pour assurer une bonne stabilité, une déflexion efficace et un confort optimal, quelles que soient les conditions météorologiques et l'état de la mer.  `,
	},
	{
		id: 6,
		title: "Odyssey 25",
		images: [odyssey251, odyssey252, odyssey253],
		description:
			"L'Odyssey 25 de TESYS International est un bateau de type day-boat conçu pour offrir des performances optimales et un confort exceptionnel lors de vos sorties en mer. Son design moderne et ses caractéristiques techniques en font un choix idéal pour les amateurs de navigation côtière.",
		technicalDetails: {
			length: 7.5,
			width: 2.5,
			draft: 0.6,
			cabins: 0,
			maxMotorization: 300,
			passengerCapacity: 10,
		},
		teysisBoatsDescription: `Sa carène est spécialement étudiée pour assurer une bonne stabilité, une déflexion efficace et un confort optimal, quelles que soient les conditions météorologiques et l'état de la mer.  `,
	},
];

export default cardsTech;
