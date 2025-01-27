import { Movie } from "../interfaces/Movie";
import "./MovieCard.css";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <p>{movie.description}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};

export default MovieCard;
