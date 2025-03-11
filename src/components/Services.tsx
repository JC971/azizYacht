import React from "react";
import "../../styles/Services.css"; 

const Services: React.FC = () => {
	return (
		<div className="services-container">
			<h1>Nos Services</h1>
			<p>
				Chez <strong>MAziz yachting</strong>, nous vous accompagnons à
				chaque étape de votre projet nautique. Que ce soit pour l’achat,
				l’entretien ou l’assistance après-vente, nous mettons notre expertise à
				votre service pour vous offrir une expérience sereine et agréable.
			</p>

			<div className="service-section">
				<h2>🔹 Vente de bateaux neufs et d’occasion</h2>
				<p>
					Nous proposons une sélection de bateaux <strong>Teysis</strong> neufs
					et d’occasion, soigneusement inspectés pour garantir leur qualité et
					leur performance. Notre équipe est à votre disposition pour vous
					guider vers le modèle qui correspond à vos attentes et à votre budget.
				</p>
			</div>

			<div className="service-section">
				<h2>🔹 Financement et solutions de leasing</h2>
				<p>
					Nous offrons des <strong>solutions de financement adaptées</strong> à
					vos besoins, que ce soit par crédit ou par leasing. Nos partenaires
					vous proposent des conditions flexibles pour faciliter l’acquisition
					de votre bateau.
				</p>
			</div>

			<div className="service-section">
				<h2>🔹 Service après-vente & maintenance</h2>
				<ul>
					<li>✔ Révisions et contrôles techniques</li>
					<li>✔ Réparations et remplacement de pièces</li>
					<li>✔ Hivernage et remise en état</li>
				</ul>
				<p>
					Nos techniciens qualifiés utilisent des pièces d’origine et des
					équipements de pointe pour garantir la fiabilité de votre bateau.
				</p>
			</div>

			<div className="service-section">
				<h2>🔹 Livraison et mise à l’eau</h2>
				<p>
					Nous organisons la <strong>livraison de votre bateau</strong>{" "}
					directement à l’emplacement de votre choix. Nous nous occupons
					également de la mise à l’eau et de la prise en main afin que vous
					puissiez naviguer en toute sérénité dès le premier jour.
				</p>
			</div>

			<div className="service-section">
				<h2>🔹 Essais en mer</h2>
				<p>
					Vous souhaitez tester un modèle avant de prendre votre décision ? Nous
					proposons des <strong>essais en mer</strong> sur certains bateaux pour
					vous permettre de découvrir leurs performances en conditions réelles.
				</p>
			</div>

			<div className="service-section">
				<h2>🔹 Conseil et accompagnement personnalisé</h2>
				<p>
					Que vous soyez novice ou marin expérimenté, nous vous accompagnons à
					chaque étape de votre projet. Nos experts sont à votre écoute pour
					vous conseiller sur le choix du bateau, les équipements, l’entretien
					et la navigation.
				</p>
			</div>

			<p className="contact-info">
				📞 <strong>Besoin d’informations ?</strong> Contactez-nous dès
				maintenant pour en savoir plus sur nos services et découvrir nos bateaux
				disponibles.
			</p>
		</div>
	);
};

export default Services;
