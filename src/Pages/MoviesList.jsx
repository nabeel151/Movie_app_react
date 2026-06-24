import { useContext } from "react";
import { MoviesListContext } from "../context/appContext";

import FilterBar from "../Components/FilterBar";
import Pagination from "../Components/Pagination";
import MovieGrid from "../Components/MovieGrid";

export default function MoviesList() {
  const { movies, page, setPage, loading } =
    useContext(MoviesListContext);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-20 space-y-6">

      <FilterBar />

      {loading ? (
        <div className="text-white text-center">Loading...</div>
      ) : movies.length === 0 ? (
        <div className="text-gray-400 text-center">No Movies Found</div>
      ) : (
        <MovieGrid movies={movies} />
      )}

      <Pagination page={page} setPage={setPage} totalPages={50} />
    </div>
  );
}