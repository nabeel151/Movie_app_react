import { useContext } from "react";
import { MoviesListContext } from "../context/appContext";

export default function FilterBar() {
  const { filters, setFilters, setPage } = useContext(MoviesListContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    setPage(1);
  };

  return (
    <div className="w-full bg-[#151515] border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg">

      {/* TITLE */}
      <h2 className="text-center text-[#6ac045] font-bold text-xl sm:text-2xl mb-5">
        Filter Movies
      </h2>

      {/* SEARCH */}
      <div className="mb-5">
        <input
          name="query_term"
          value={filters.query_term}
          onChange={handleChange}
          placeholder="Search movies..."
          className="w-full bg-[#232323] px-4 py-3 text-white rounded-lg border border-transparent focus:border-[#6ac045] outline-none transition"
        />
      </div>

      {/* FILTER GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* QUALITY FILTER */}
        <select
          name="quality"
          value={filters.quality}
          onChange={handleChange}
          className="w-full bg-[#232323] px-3 py-3 text-white rounded-lg border border-transparent focus:border-[#6ac045] outline-none cursor-pointer"
        >
          <option value="">All Quality</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="2160p">4K (2160p)</option>
        </select>

        {/* GENRE */}
        <select
          name="genre"
          value={filters.genre}
          onChange={handleChange}
          className="w-full bg-[#232323] px-3 py-3 text-white rounded-lg border border-transparent focus:border-[#6ac045] outline-none cursor-pointer"
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>

        {/* RATING */}
        <select
          name="minimum_rating"
          value={filters.minimum_rating}
          onChange={handleChange}
          className="w-full bg-[#232323] px-3 py-3 text-white rounded-lg border border-transparent focus:border-[#6ac045] outline-none cursor-pointer"
        >
          <option value="">All Ratings</option>
          <option value="9">9+ ⭐</option>
          <option value="8">8+ ⭐</option>
          <option value="7">7+ ⭐</option>
        </select>

        {/* SORT (optional but useful) */}
        <select
          name="sort_by"
          value={filters.sort_by}
          onChange={handleChange}
          className="w-full bg-[#232323] px-3 py-3 text-white rounded-lg border border-transparent focus:border-[#6ac045] outline-none cursor-pointer"
        >
          <option value="year">Latest</option>
          <option value="rating">Rating</option>
          <option value="download_count">Popular</option>
        </select>

      </div>
    </div>
  );
}