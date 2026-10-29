import { useState } from "react";

type Movie = {
  id: number;
  title: string;
  year: number;
};

export default function Ex7bDelete() {

  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, title: "Harry Potter", year: 2005 },
    { id: 2, title: "Mad Max", year: 1999 },
    { id: 3, title: "Odissey", year: 2026 },
    { id: 4, title: "Interstellar", year: 2014 }
  ]);

  function remove(id: number): void {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <>
    <h1>Filme ramase: {movies.length}</h1>

    {movies.length === 0 ? (
      <p>Niciun film</p>
    ) : (
      <ul>
        {movies.map((movie) => (
          <li key = {movie.id}>
            {movie.title} ({movie.year}) - 
            <button onClick={() => remove(movie.id)}>
              Șterge
            </button>
          </li>
        ))}
      </ul>
    )}
    </>
  );
}
