import HeroSection from "../components/HeroSection";
import image1 from "../images/mirage33Accueil.jpeg";
import image2 from "../images/mirage30Accueil.jpg";
import image3 from "../images/mirage-28-montage-2.jpg";
import image4 from "../images/mirage_26.jpg";
import image5 from "../images/mirage23.jpg";
import image6 from "../images/mirage20Accueil.jpg";
import image7 from "../images/mirage18Accueil.jpg";
import image8 from "../images/mirage15.jpg";
// photocontainer page acceuil images bateaux neufs
import PhotoContainer from "../components/PhotoContainer";



function Home() {
	const images = [image1, image2, image3, image4, image5, image6, image7, image8]
	return (
		<div>
			<HeroSection />

			<PhotoContainer images={images} />
			
			
		</div>
	);
}

export default Home;
