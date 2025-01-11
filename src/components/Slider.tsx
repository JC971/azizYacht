import { useState, useEffect } from "react";

interface ImageData {
	url: string;
	description: string; // Assuming the JSON data uses "description"
}

const DynamicSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [makayData, setMakayData] = useState<ImageData[]>([]); // Using the interface with useState
	const [isLoading, setIsLoading] = useState(true); // Track loading state
	const [error, setError] = useState<string | null>(null); // Explicitly declare the type for error

	// Fetching data from images.json
	useEffect(() => {
		fetch("/images.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setMakayData(data);
				setIsLoading(false); // Set loading to false once the data is loaded
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setError(error.toString()); // Set error message
				setIsLoading(false); // Update loading state even on error
			});
	}, []);

	const nextImage = () => {
		setCurrentIndex((currentIndex + 1) % makayData.length);
	};

	const prevImage = () => {
		setCurrentIndex((currentIndex + makayData.length - 1) % makayData.length);
	};

	if (isLoading) {
		return <p>Loading images...</p>; // Show loading indicator while data is loading
	}

	if (error) {
		return <p>Error loading images: {error}</p>; // Show error message if there was an error during fetch
	}

	return (
		<div className="slider">
			<button onClick={prevImage}>Back</button>
			{makayData.length > 0 && (
				<div>
					<img
						src={makayData[currentIndex].url}
						alt={`Slide ${currentIndex + 1}`}
					/>
					<p>{makayData[currentIndex].description}</p>
				</div>
			)}
			<button onClick={nextImage}>Next</button>
		</div>
	);
};

export default DynamicSlider;
