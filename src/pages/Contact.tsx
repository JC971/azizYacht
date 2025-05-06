
import { useState, FormEvent } from "react";
import "../../styles/contentContact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		botField: "", // honeypot
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
		setError("");
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// honeypot check
		if (formData.botField) return;

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
				setFormData({ name: "", email: "", message: "", botField: "" });
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
		<div className="formulaire">
			<h2 className="formTitle">Nous Contacter</h2>

			{success ? (
				<div className="success-container" aria-live="polite">
					<p className="success-message">
						✅ Votre message a bien été envoyé !
					</p>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="form-contact"
					aria-label="Formulaire de contact"
				>
					{/* honeypot */}
					<input
						type="text"
						name="botField"
						style={{ display: "none" }}
						onChange={handleChange}
						value={formData.botField}
						autoComplete="off"
					/>

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
							aria-invalid={!!error && !formData.name}
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
							aria-invalid={!!error && !formData.email}
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
							aria-invalid={!!error && !formData.message}
							maxLength={1000}
						/>
					</div>

					{error && (
						<p className="error-message" aria-live="assertive">
							{error}
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
			)}
		</div>
	);
};

export default Contact;
