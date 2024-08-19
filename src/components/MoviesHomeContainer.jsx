import MovieFooterInfo from './MovieFooterInfo'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MovieSlider from './MovieSlider';
import MovieCategorieInfo from '../components/MovieCategorieInfo'

export default function MoviesCont() {
  
  return (
    <div className='w-[98vw] h-[79%] bg-gray-950 rounded-3xl mx-auto mt-[2%]' >
       <MovieCategorieInfo/>
        <MovieSlider/>
      <MovieFooterInfo/>
    </div>
  );
}