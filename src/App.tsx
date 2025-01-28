import "./App.css";
import { Movie } from "./interfaces/Movie";
import MovieList from "./components/MovieList";


function App() {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      rating: 8.8,
      description: "A skilled thief leads a team into the subconscious world.",
      genre: "Sci-Fi",
    },
    {
      id: 2,
      title: "Interstellar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9maE7-yWPpULS8xay8yVKGnVZctnXkOXMg&s",
      rating: 8.6,
      description: "A team explores a wormhole to ensure humanity's survival.",
      genre: "Sci-Fi",
    },
    {
      id: 3,
      title: "The Dark Knight",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 9.0,
      description: "Batman faces the Joker, a criminal mastermind.",
      genre: "Action",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      image:
        "https://resizing.flixster.com/SzNzBSg0ezjiN6IEHyeZ-fF1aqU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h9_at.jpg",
      rating: 9.3,
      description: "Two imprisoned men bond over a number of years.",
      genre: "Drama",
    },
    {
      id: 5,
      title: "Pulp Fiction",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 8.9,
      description:
        "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.",
      genre: "Comedy",
    },
    {
      id: 6,
      title: "Forrest Gump",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man.",
      genre: "Drama",
    },
    {
      id: 7,
      title: "The Matrix",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscJz2jJQ2Q4BJHx_WBSYqCVidQDu_Ir8U5w&s",
      rating: 8.7,
      description:
        "A computer hacker learns about the true nature of his reality.",
      genre: "Sci-Fi",
    },
    {
      id: 8,
      title: "Fight Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHAgGGoJOraKrkB_jUIt-81zqknRoPVnZNQ&s",
      rating: 8.8,
      description:
        "An insomniac office worker forms an underground fight club.",
      genre: "Drama",
    },
    {
      id: 9,
      title: "The Lord of the Rings: The Return of the King",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
      rating: 9.0,
      description: "The final battle for Middle-earth begins.",
      genre: "Fantasy",
    },
    {
      id: 10,
      title: "Gladiator",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
      rating: 8.5,
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
      genre: "Action",
    },
    {
      id: 12,
      title: "Saving Private Ryan",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 8.6,
      description:
        "During World War II, a group of U.S. soldiers goes behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      genre: "Action",
    },
  ];

  return (
    <div>
      <h1>Movie Library</h1>
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default App;
