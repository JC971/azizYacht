/*
import { useState, FormEvent } from "react";
import '../../styles/contentContact.css';
import contactImage from "../images/odyssey-28.jpg"

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
			<div className="contactImage">
				<img src={contactImage} alt="" />
			</div>
			<div className="formulaire">
				<h2 className="formTitle">Nous Contacter</h2>
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
*/
import { useState, FormEvent } from "react";
import "../../styles/contentContact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError(""); // reset error message
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.name || !formData.email || !formData.message) {
			setError("Tous les champs sont requis.");
			return;
		}
		if (!emailRegex.test(formData.email)) {
			setError("Veuillez entrer un email valide.");
			return;
		}

		setLoading(true);
		setSuccess(false);

		try {
			const response = await fetch("http://localhost:5000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSuccess(true);
				setFormData({ name: "", email: "", message: "" });
			} else {
				setError("Une erreur est survenue. Réessayez.");
			}
		} catch {
			setError("Impossible de se connecter au serveur.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="formulaire">
				<h2 className="formTitle">Nous Contacter</h2>
				<form
					onSubmit={handleSubmit}
					className="form-contact"
					aria-label="Formulaire de contact"
				>
					<div className="nameDiv">
						<label htmlFor="name">Nom :</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							aria-required="true"
							aria-label="Nom"
						/>
					</div>
					<div className="emailDiv">
						<label htmlFor="email">Email :</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							aria-required="true"
							aria-label="Email"
						/>
					</div>
					<div className="messageDiv">
						<label htmlFor="message">Message :</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							aria-required="true"
							aria-label="Message"
						/>
					</div>
					{error && <p className="error-message">{error}</p>}
					{success && (
						<p className="success-message">
							Votre message a été envoyé avec succès !
						</p>
					)}
					<button type="submit" disabled={loading}>
						{loading ? (
							<>
								<span className="spinner" />{" "}
								<span style={{ marginLeft: "8px" }}>Envoi...</span>
							</>
						) : (
							"Envoyer le message"
						)}
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
