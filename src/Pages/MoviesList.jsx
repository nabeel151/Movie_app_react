import { useEffect, useState } from "react";
import FilterBar from "../Components/FilterBar";
import Pagination from "../Components/Pagination";
import MovieGrid from "../Components/MovieGrid";
import { fetchMoviesAPI } from "../Util/movie.service";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Filters
  const [filters, setFilters] = useState({
    query_term: "",
    quality: "",
    genre: "",
    minimum_rating: 0,
    sort_by: "year",
    with_rt_ratings: "false",
  });

  const [searchTrigger, setSearchTrigger] = useState(0);

  const fetchMovies = async () => {
    setLoading(true);

    try {
      const moviesData = await fetchMoviesAPI(page, filters);
      setMovies(moviesData);
    } catch (error) {
      console.error("API Error:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, searchTrigger]);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 space-y-6">

      {/* FILTER BAR */}
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        onSearch={() => {
          setPage(1);
          setSearchTrigger((prev) => prev + 1);
        }}
      />

      {/* TOP PAGINATION */}
      <Pagination page={page} setPage={setPage} totalPages={50} />

      {/* MOVIES */}
      {loading ? (
        <div className="flex justify-center items-center py-24">
          <div className="w-12 h-12 border-4 border-[#6ac045] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <MovieGrid movies={movies} />
      )}

      {/* BOTTOM PAGINATION */}
      <Pagination page={page} setPage={setPage} totalPages={50} />

    </div>
  );
}