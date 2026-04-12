import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({movie}) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Poster"
        }
        alt={movie.id}
      />
      <div>
        <Link to = "movie/${movie.id}">
        <h4><strong>Title: </strong>{movie.title}</h4>
        </Link>
        <p>ReleaseDate: {movie.release_date}</p>
        <p>Overview : {movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
