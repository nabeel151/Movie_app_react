export default function FilterBar({ filters, setFilters, onSearch }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Allows user to press 'Enter' inside the text input to trigger search natively
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="w-full bg-[#151515] py-4 sm:py-6 border-b border-gray-800 rounded-xl">
      <div className="w-full px-4 sm:px-6">

        {/* SEARCH AREA */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            name="query_term"
            value={filters.query_term}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search movies..."
            className="w-full sm:flex-1 bg-[#232323] px-4 py-3 text-white rounded text-sm sm:text-base outline-none border border-transparent focus:border-[#6ac045] transition-colors"
          />

          <button
            onClick={onSearch}
            className="w-full sm:w-auto bg-[#6ac045] hover:bg-green-600 active:scale-[0.98] text-white font-medium px-8 py-3 rounded text-sm sm:text-base transition-all duration-150"
          >
            Search
          </button>
        </div>

        {/* FILTERS DROPDOWN GRID */}
        {/* Adjusted to grid-cols-1 -> grid-cols-2 -> grid-cols-3 -> lg:grid-cols-5 for perfect symmetry */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

          <select
            name="quality"
            value={filters.quality}
            onChange={handleChange}
            className="w-full bg-[#232323] p-3 rounded text-white text-sm outline-none border border-transparent focus:border-gray-700 cursor-pointer"
          >
            <option value="">Quality</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
            <option value="2160p">2160p</option>
          </select>

          <select
            name="genre"
            value={filters.genre}
            onChange={handleChange}
            className="w-full bg-[#232323] p-3 rounded text-white text-sm outline-none border border-transparent focus:border-gray-700 cursor-pointer"
          >
            <option value="">Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
          </select>

          <select
            name="minimum_rating"
            value={filters.minimum_rating}
            onChange={handleChange}
            className="w-full bg-[#232323] p-3 rounded text-white text-sm outline-none border border-transparent focus:border-gray-700 cursor-pointer"
          >
            <option value="0">Rating</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
            <option value="6">6+</option>
          </select>

          <select
            name="sort_by"
            value={filters.sort_by}
            onChange={handleChange}
            className="w-full bg-[#232323] p-3 rounded text-white text-sm outline-none border border-transparent focus:border-gray-700 cursor-pointer"
          >
            <option value="year">Latest</option>
            <option value="rating">Rating</option>
            <option value="download_count">Popular</option>
          </select>

          {/* This fifth dropdown handles col-span styling rules beautifully on mid-tier viewports */}
          <select
            name="with_rt_ratings"
            value={filters.with_rt_ratings}
            onChange={handleChange}
            className="w-full sm:col-span-2 lg:col-span-1 bg-[#232323] p-3 rounded text-white text-sm outline-none border border-transparent focus:border-gray-700 cursor-pointer"
          >
            <option value="false">No RT</option>
            <option value="true">With RT</option>
          </select>

        </div>

      </div>
    </div>
  );
}