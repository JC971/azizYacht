import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./teysis.module.css";
import imageMirage33 from "../images/Mirage-33.jpg";
import imageOdyssey from "../images/odyssey-28.jpg";
import imageMirage26 from "../images/mirage_26.jpg";
import imageMirage18 from "../images/mirage_18.jpg";
import logoTeysis from "../images/logo.png";
import m18lg from "../images/mirage_18_lg.jpg";




const Teysis: React.FC = () => {
	const [showImage, setShowImage] = useState(true);
	const [fadeOut, setFadeOut] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true);
			setTimeout(()=>setShowImage(false), 2000)
		
		}, 2000);
		return () => clearTimeout(timer)
	}, []);

	const cards = [
		{
			id: 1,
			title: "Mirage 33",
			image: imageMirage33,
			description:
				"Le Mirage 33 est parfait pour la détente et les loisirs en mer. Alliant simplicité et fonctionnalité, il offre un aménagement confortable pour ceux qui recherchent des expériences de navigation sereines et agréables.",
		},
		{
			id: 2,
			title: "Odyssey 28",
			image: imageOdyssey,
			description:
				"Conçu par STAMA Design, l'Odyssey 28 se distingue par son profil élégant et ses finitions raffinées. Il offre un design sophistiqué associé à des performances exceptionnelles, ce qui en fait un choix idéal alliant style et fonctionnalité.",
		},
		{
			id: 3,
			title: "Mirage 30",
			image: imageMirage18,
			description:
				"Le Mirage 30 offre un parfait équilibre entre confort, design et performance. Avec ses lignes élégantes, son espace optimisé et sa motorisation performante, il garantit une navigation fluide et agréable pour des moments inoubliables en mer, seul ou accompagné.",
		},
		{
			id: 4,
			title: "Mirage 26",
			image: imageMirage26,
			description:
				"Le Mirage 26 allie élégance et praticité pour une navigation confortable. Son design moderne et son agencement optimisé offrent un excellent équilibre entre performance et détente, faisant de lui un bateau idéal pour des sorties agréables en mer, en famille ou entre amis.",
		},
		{
			id: 5,
			title: "Mirage 23",
			image: imageMirage18,
			description:
				"Le Mirage 23 est un bateau compact et élégant, conçu pour allier confort et performance. Son agencement optimisé offre une navigation fluide et agréable, idéale pour des sorties en mer en toute sérénité, que ce soit en famille ou entre amis.",
		},
		{
			id: 6,
			title: "Odyssey 25",
			image: imageMirage18,
			description:
				"L'Odyssey 25 combine design raffiné et praticité. Son agencement intelligent et sa navigation fluide en font un bateau idéal pour des escapades en mer, alliant confort, performance et plaisir, que ce soit pour des sorties en famille ou entre amis.",
		},
	
		{
			id: 7,
			title: "Mirage 20",
			image: imageMirage18,
			description:
				"le Mirage 20: l'équilibre de tous les composants font la valeur essentielle de ce magnifique bateau. Facile à tracter et garer, le Mirage 20, de 6m de longueur, offre à ses hôtes tout l'aspect et le confort pour une vie à bord de première qualité",
		},
		{
			id: 8,
			title: "Mirage 18",
			image: imageMirage18,
			description:
				"Idéal pour la famille, qui peut ainsi jouir d'agréables journées (et nuits) de camping nautique en complète autonomie, le Mirage 18 se révèle excelent pour tout usage. Il accepte des motorisations importantes(150Cv) offrant ainsi de remarquables performances.",
		},
		{
			id: 9,
			title: "Mirage 15",
			image: imageMirage18,
			description:
				"Cest le tout petit de la famille. Mais c'est le plus stupéfiant. Le Mirage 15 transporte confortablement et en toute sécurité 5 personnes, il est doté de vastes coffres, supporte sans problème un H.B de 90 cv et adopte un navigation rapide et aisé selon l'humeur de son pilote",
		},
		{
			id: 10,
			title: "Mirage Tender 355",
			image: imageMirage18,
			description:
				"Le TENDER 355 est le tout petit de la gamme TENDER, il peut accueillir une motorisation jusqu’à 40cv. C’est un bateau « work » par excellence et vous pouvez l’utiliser aussi comme une annexe très légère pour les bateaux à moteur ou les voiliers ; c’est le « dinghy » idéal.",
		},
		{
			id: 11,
			title: "Mirage Tender 450",
			image: imageMirage18,
			description:
				"LE TENDER 450 est le cadet de la gamme TENDER, idéal pour les gens qui recherchent un bateau fiable et sûr. Facile à transporter, il accepte une motorisation jusqu’à 90cv.",
		},
	];

	return (
		<>
			{showImage && (
				<div className={`${styles.mirage18} ${fadeOut ? styles.zoomFadeOut : ""}`}>
					<img src={m18lg} alt="Mirage 18" className={styles.fadeImage} />
				</div>
			)}
			<Link to="/new">
				<h2 className={styles.teysisTitle}>Nos bateaux à la vente</h2>
			</Link>
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
