
import React, { useState, useEffect, useRef, useCallback } from "react";
import "./caroussel.css";

interface CarousselProps {
	images: {
		src: string;
		title?: string;
	}[];
}

const Caroussel: React.FC<CarousselProps> = ({ images }) => {
	const [current, setCurrent] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);

	// Utilisation de useRef pour stocker la référence de timeOut
	const timeOut = useRef<NodeJS.Timeout | null>(null);
	/////////////////////////////
		const slideRight = useCallback(() => {
			setCurrent((prevCurrent) =>
				prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
			);
		}, [images.length]);
	// pour aller à l'image précédente
const slideLeft = useCallback(() => {
	setCurrent((prevCurrent) =>
		prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
	);
}, [images.length]);

	/////////////////////////////

	useEffect(() => {
		if (autoPlay) {
			timeOut.current = setTimeout(() => {
				slideRight();
			}, 4000);
		}

		return () => {
			if (timeOut.current) {
				clearTimeout(timeOut.current);
			}
		};
	}, [autoPlay, current, images.length, slideRight]); 


	return (
		<>
			<h2 className="usedBoatsTitle">Used boats available for purchase

			</h2>
			<div
				className="caroussel-container"
				onMouseEnter={() => {
					setAutoPlay(false);
					if (timeOut.current) {
						clearTimeout(timeOut.current);
					}
				}}
				onMouseLeave={() => {
					setAutoPlay(true);
				}}
			>
				<div className="caroussel-wrapper">
					{images.map((image, index) => (
						<div
							key={index.toString()}
							className={
								index === current
									? "caroussel-slide caroussel-slide-active"
									: "caroussel-slide"
							}
						>
							<img src={image.src} alt={image.title || "Caroussel image"} />
							{image.title && (
								<div className="carousselOverlay">
									<div className="caroussel-title">{image.title}</div>
								</div>
							)}
						</div>
					))}
					<div className="caroussel_left_arrow" onClick={slideLeft}>
						&lsaquo;
					</div>
					<div className="caroussel_right_arrow" onClick={slideRight}>
						&rsaquo;
					</div>
				</div>

				<div className="carousel-pagination">
					{images.map((_, index) => (
						<div
							key={index}
							className={`pagination_dot ${
								index === current ? "pagination_dot-active" : ""
							}`}
							onClick={() => setCurrent(index)}
							role="button"
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Caroussel;
