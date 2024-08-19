import {Swiper, SwiperSlide } from 'swiper/react';
import { swiperConfig } from '../utils/swipperConfig';
import { useNavigate } from 'react-router-dom';
import { movies } from '../api/moviesData';

function MovieSlider() {
  const navigate = useNavigate()
  return (
    <Swiper {...swiperConfig}>
      {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate(`/movietoshow/${movie.id}`)}
              className="cursor-pointer"
            >
              <div className="h-64 w-44 overflow-hidden mx-auto">
                <img src={movie.src} className="w-full h-full object-cover" alt={movie.title} />
              </div>
              <h2 className="text-white text-center mt-2">{movie.title}</h2>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default MovieSlider
