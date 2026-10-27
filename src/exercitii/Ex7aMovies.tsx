type Movie = { 
  id: number,
  title: string,
  year: number
};

export default function Ex7aMovies() {

const movies: Movie[] = [
  { id: 1, title: "Harry Potter", year: 2005},
  { id: 2, title: "Mad Max", year: 1999},
  { id: 3, title: "Odissey", year: 2026},
  { id: 4, title: "Matrix", year: 1995}
];

  return (
    <>
    <h1>Filme ({movies.length})</h1>
    <ul>
    
      {movies.map((movie) => (
        <li key = {movie.id}>
          {movie.title} ({movie.year})
        </li>
      ))}
    </ul>
    </>
  );
}
