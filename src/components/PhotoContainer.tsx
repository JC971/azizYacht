import React from "react";
import styles from "../../styles/photoContainer.module.css";
import { Link } from "react-router-dom";

interface PhotoContainerProps {
	images: string[];
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ images }) => {
	return (
		<> 
			<Link to="/new">
				<h2 className={styles.titleHomeNew}>Nos bateaux neufs</h2>
			</Link>
		<Link to="/new">
			<div className={styles.container}>
				{images.map((photo, index) => (
					<img
						key={index}
						src={photo}
						alt={`Photo ${index + 1}`}
						className={styles.image}
					/>
				))}
			</div>
			</Link>
			</>
	);
};

export default PhotoContainer;
