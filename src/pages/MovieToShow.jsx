import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { movies } from "../api/moviesData";
import { useEffect, useState } from "react";

function MovieToShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieToShow, setMovieToShow] = useState(null);

  useEffect(() => {
    if (id) {
      console.log(id);
      const result = movies.find((movie) => movie.id === Number(id));
      setMovieToShow(result);
    }
  }, [id]);

  console.log(movieToShow);

  return (
    <div className='bg-gray-900 h-[100vh] w-[100vw] overflow-x-hidden'>
      <div className='w-[98vw] h-[80vh] bg-gray-950 rounded-3xl mx-auto mt-5'>
        <div className='flex gap-10 justify-center'>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center text-white"
          >
            Volver
          </button>
          <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center text-white'>
            Info
          </div>
        </div>
        <iframe
          src={movieToShow ? movieToShow.url : ""}
          title="Movie Player"
          className="w-[90%] h-[85%] mx-auto mt-4"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
        ></iframe>
      </div>
    </div>
  );
}

export default MovieToShow;
