/* Nouveau composant FloatingNav.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FloatingNav = () => (
	<motion.nav
		className="floating-nav"
		initial={{ y: -100 }}
		animate={{ y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<Link to="/new" className="nav-item">
			<span className="material-icons">directions_boat</span>
			<span>Neufs</span>
		</Link>
		// Ajouter d'autres liens...
	</motion.nav>
);
*/