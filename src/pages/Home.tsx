
import HeroSection from '../components/HeroSection'
import Chartering from '../components/Chartering'
import Teysis from '../components/Teysis'
import Caroussel from '../components/Caroussel';
import { makays } from  "../components/Data"
import Makay from '../components/makay';
import UsedBoats from './usedBoats';


function Home() {
  return (
		<div>
			<HeroSection />
		  <Teysis />
		  <Makay />
		  <UsedBoats />
			<Caroussel images={makays} />
			<Chartering />
		</div>
	);
}

export default Home
