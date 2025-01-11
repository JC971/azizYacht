
import { useState } from "react";



const CookiePopup = () => {
const [visible, setVisible] = useState(() => {
	try {
		return !localStorage.getItem("cookiesAccepted");
	} catch (e) {
		console.error("localStorage non accessible", e);
		return true; 
	}
});

	const acceptCookies = () => {
		localStorage.setItem("cookiesAccepted", "true");
		setVisible(false);
	};

	if (!visible) {
		return null;
	}

	return (
		<div className="cookie-popup">
			<div className="cookie-popup-content">
				<p>
					Nous utilisons des cookies pour améliorer votre expérience. En
					continuant à utiliser notre site, vous acceptez notre utilisation des
					cookies.
				</p>
				<button onClick={acceptCookies}>Accepter</button>
			</div>
		</div>
	);
};

export default CookiePopup;
