
import React from "react";
import styles from "../../styles/Confidentialite.module.css"

const Confidentialite: React.FC = () => {
	return (
		<div className={styles.confidentialiteContainer}>
			<h1>Politique de Confidentialité</h1>

			<section>
				<h2>Introduction</h2>
				<p>
					Cette politique de confidentialité décrit comment Maziz Yachting,
					basée à Cannes, collecte, utilise et protège vos données personnelles.
				</p>
			</section>

			<section>
				<h2>Collecte des données</h2>
				<p>
					Nous collectons les informations que vous nous fournissez via notre
					formulaire de contact, comme votre nom, votre adresse e-mail et votre
					numéro de téléphone. Nous pouvons également collecter des données via
					des cookies pour améliorer votre expérience sur le site.
				</p>
			</section>

			<section>
				<h2>Utilisation des données</h2>
				<p>
					Les données collectées sont utilisées pour répondre à vos demandes,
					pour vous contacter et pour analyser l'utilisation du site afin de
					l'améliorer.
				</p>
			</section>

			<section>
				<h2>Partage des données</h2>
				<p>
					Nous ne vendons ni ne partageons vos données personnelles avec des
					tiers, sauf si cela est requis par la loi.
				</p>
			</section>

			<section>
				<h2>Protection des données</h2>
				<p>
					Nous mettons en œuvre des mesures de sécurité techniques et
					organisationnelles pour protéger vos données personnelles.
				</p>
			</section>

			<section>
				<h2>Vos droits</h2>
				<p>
					Vous pouvez nous contacter à l'adresse
					<a href="mailto:contact@mazizyachting.com">
						{" "}
						contact@mazizyachting.com{" "}
					</a>
					pour accéder à vos données, demander leur rectification ou leur
					suppression.
				</p>
			</section>

			<section>
				<h2>Contact</h2>
				<p>
					Pour toute question relative à notre politique de confidentialité,
					contactez-nous à : contact@mazizyachting.com
				</p>
			</section>
		</div>
	);
};

export default Confidentialite;
