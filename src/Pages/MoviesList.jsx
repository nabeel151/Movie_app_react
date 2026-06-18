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
    // Changed pt-24 to responsive pt-20 md:pt-28, and px-6 to px-4 sm:px-6
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 pb-12 space-y-6 md:space-y-8">

      {/* FILTER BAR */}
      <div className="w-full">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onSearch={() => {
            setPage(1);
            setSearchTrigger((prev) => prev + 1);
          }}
        />
      </div>

      {/* TOP PAGINATION - Hidden on tiny mobile screens to avoid clutter, handled by bottom pagination */}
      <div className="hidden sm:flex justify-center sm:justify-end">
        <Pagination page={page} setPage={setPage} totalPages={50} />
      </div>

      {/* MOVIES SECTION */}
      <main className="w-full min-h-[50vh]">
        {loading ? (
          <div className="flex justify-center items-center py-20 md:py-32">
            <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-[#6ac045] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center py-20 md:py-32 px-4">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
              No Movies Found
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
              Try adjusting your search filters or keywords to find what you are looking for.
            </p>
          </div>
        ) : (
          <MovieGrid movies={movies} />
        )}
      </main>

      {/* BOTTOM PAGINATION - Always visible, centered on mobile */}
      <div className="flex justify-center pt-4 border-t border-gray-800">
        <Pagination page={page} setPage={setPage} totalPages={50} />
      </div>

    </div>
  );
}