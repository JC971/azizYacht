import { useState, FormEvent } from "react";

import '../../styles/contentContact.css';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validation optionnelle
		if (!formData.name || !formData.email || !formData.message) {
			alert("Tous les champs sont requis.");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("Réponse du serveur : ", data);
				alert("Votre message a été envoyé avec succès !");
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			} else {
				console.error("Erreur lors de l'envoi du message");
				alert("Une erreur est survenue. Réessayez.");
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi des données au serveur :", error);
			alert(
				"Impossible de se connecter au serveur. Vérifiez votre connexion ou contactez l'administrateur."
			);
		}
	};

	return (
		<>
			<div className="formulaire">
				<h2 className="formTitle">Contact Us</h2>
				<form onSubmit={handleSubmit} className="form-contact">
					<div className="nameDiv">
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="emailDiv">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
					</div>
					<div className="messageDiv" >
						<label htmlFor="message">Message:</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
