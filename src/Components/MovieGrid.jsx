import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
<div className="grid grid-cols-5 gap-x-2 gap-y-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}