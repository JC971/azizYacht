import { useState, FormEvent } from "react";
import ContentContact from "../components/ContentContact";

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

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log("Data submitted:", formData);
		alert("Thank you for your message!");
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
        <>
            <ContentContact />
			<div className="formulaire">
				<form onSubmit={handleSubmit} className="form-contact">
					<div>
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
					<div>
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
					<div>
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
