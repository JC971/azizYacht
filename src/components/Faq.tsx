import "../../styles/Faq.css"

const Faq = () => {
	return (
		<div className="container">
			<h1 className="title">FAQ</h1>
			<div className="faq-section">
				<div className="faq-item">
					<h2 className="question">Quels types de bateaux proposez-vous ?</h2>
					<p className="answer">
						Nous proposons une large gamme de bateaux Teysis, conçus pour
						répondre aux besoins des plaisanciers et des passionnés de
						navigation. Nos modèles allient performance, confort et design pour
						vous garantir une expérience optimale en mer.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">
						Comment choisir le bateau qui me convient ?
					</h2>
					<p className="answer">
						Le choix de votre bateau dépend de plusieurs critères :
					</p>
					<ul className="answer-list">
						<li>
							Votre utilisation (balades, sports nautiques, pêche, croisière...)
						</li>
						<li>La capacité d’accueil souhaitée</li>
						<li>Votre budget et les équipements nécessaires</li>
					</ul>
					<p className="answer">
						Nos experts sont à votre disposition pour vous conseiller et vous
						aider à trouver le bateau idéal.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">
						Proposez-vous des solutions de financement ?
					</h2>
					<p className="answer">
						Oui, nous offrons différentes solutions de financement adaptées à
						votre budget. N’hésitez pas à nous contacter pour en savoir plus sur
						les options de crédit et de leasing disponibles.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">Livrez-vous les bateaux ?</h2>
					<p className="answer">
						Oui, nous proposons un service de livraison afin que vous puissiez
						recevoir votre bateau directement sur le lieu de votre choix. Nous
						organisons également la mise à l’eau et la prise en main du bateau.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">Offrez-vous un service après-vente ?</h2>
					<p className="answer">
						Absolument ! Nous assurons un service après-vente complet :
					</p>
					<ul className="answer-list">
						<li>Entretien et révisions</li>
						<li>Réparations et remplacement de pièces</li>
						<li>Conseils d’experts pour l’entretien de votre bateau</li>
					</ul>
					<p className="answer">
						Notre équipe reste à votre écoute pour vous garantir une navigation
						en toute sérénité.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">
						Peut-on essayer un bateau avant l’achat ?
					</h2>
					<p className="answer">
						Oui, nous proposons des essais en mer sur certains modèles.
						Contactez-nous pour planifier un rendez-vous et découvrir nos
						bateaux en conditions réelles.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">
						Quels documents sont nécessaires pour acheter un bateau ?
					</h2>
					<p className="answer">Lors de l’achat, vous aurez besoin de :</p>
					<ul className="answer-list">
						<li>Une pièce d’identité</li>
						<li>Un justificatif de domicile</li>
						<li>Les documents liés au financement (si applicable)</li>
					</ul>
					<p className="answer">
						Nous vous accompagnons dans toutes les démarches administratives
						pour un achat en toute tranquillité.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">
						Où puis-je voir les bateaux disponibles ?
					</h2>
					<p className="answer">
						Nos bateaux sont visibles en concession et sur notre site web. Nous
						mettons régulièrement à jour notre stock pour vous proposer les
						derniers modèles disponibles.
					</p>
				</div>
				<div className="faq-item">
					<h2 className="question">Comment vous contacter ?</h2>
					<p className="answer">Vous pouvez nous joindre via :</p>
					<ul className="answer-list">
						<li> Téléphone : </li>
						<li> E-mail : </li>
						<li> Adresse : </li>
					</ul>
					<p className="answer">
						Ou passez nous voir directement en concession, nous serons ravis de
						vous accueillir !
					</p>
				</div>
			</div>
		</div>
	);
};

export default Faq;
