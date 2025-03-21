/*
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

*/
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../../styles/photoContainer.module.css";

interface PhotoContainerProps {
	images: string[];
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ images }) => {
	const [fade, setFade] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const checkMobile = () =>
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (!isMobile) {
			setFade(true);
			setTimeout(() => navigate("/new"), 600);
		}
	};

	return (
		<section className={styles.sectionContainer}>
			<Link
				to="/new"
				className={`${styles.linkContainer} ${fade ? styles.fadeOut : ""}`}
				onClick={handleClick}
				aria-label="Voir les bateaux neufs"
			>
				<h2 className={styles.titleHomeNew}>
					<span className={styles.titleText}>Nos bateaux neufs</span>
					<span className={styles.arrowIcon}>→</span>
				</h2>

				<div className={styles.scrollContainer}>
					<div className={styles.gallery}>
						{[...images, ...images].map((photo, index) => (
							<div key={index} className={styles.imageWrapper}>
								<LazyLoadImage
									src={photo}
									alt={`Bateau ${index + 1}`}
									className={styles.image}
									effect="blur"
									threshold={100}
									wrapperClassName={styles.imageLazyWrapper}
								/>
								<div className={styles.imageOverlay}>
									<span className={styles.viewDetails}>Voir détails</span>
								</div>
							</div>
						))}
					</div>
					<div className={styles.gradientOverlay}></div>
				</div>
			</Link>
		</section>
	);
};

export default PhotoContainer;