import React, { useState } from "react";
import styles from "../../styles/photoContainer.module.css";
import { Link, useNavigate } from "react-router-dom";

// Interface des props
interface PhotoContainerProps {
	images: string[];
}

// Composant PhotoContainer 
const PhotoContainer: React.FC<PhotoContainerProps> = ({ images }) => {
	const [fade, setFade] = useState(false);
	const navigate = useNavigate();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		setFade(true);
		setTimeout(() => navigate("/new"), 600);
	};

	return (
		<Link
			to="/new"
			className={`${styles.linkContainer} ${fade ? styles.fadeOut : ""}`}
			onClick={handleClick}
		>
			<h2 className={styles.titleHomeNew}>Nos bateaux neufs</h2>
			<div className={styles.scrollContainer}>
				<div className={styles.gallery}>
					{images.concat(images).map((photo, index) => (
						<img
							key={index}
							src={photo}
							alt={`Photo ${index + 1}`}
							className={styles.image}
						/>
					))}
				</div>
			</div>
		</Link>
	);
};

export default PhotoContainer;

