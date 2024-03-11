
import About from '../component/About';
import Foods from '../component/foods';
import Contact from '../component/Contact';
import { NavLink } from 'react-router-dom';
import Reviews from '../component/reviews';
import BestFood from '../component/bestFood';
import FreeDelivery from '../component/freeDelivery';
import OurTeam from '../component/ourTeam';

const Home = () => {

 

  return (

    <div>
    
    <div className=''>
      <About></About>
      <Foods></Foods>
      <BestFood></BestFood>
      <FreeDelivery></FreeDelivery>
      <OurTeam></OurTeam>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
    </div>
  );
};

export default Home;