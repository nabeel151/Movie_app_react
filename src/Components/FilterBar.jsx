export default function FilterBar({ filters, setFilters, onSearch }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#151515] py-6 border-b border-gray-800">

      <div className="max-w-6xl mx-auto px-6">

        {/* SEARCH */}
        <div className="mb-6 flex gap-4">
          <input
            name="query_term"
            value={filters.query_term}
            onChange={handleChange}
            placeholder="Search movies..."
            className="flex-1 bg-[#232323] px-4 py-3 text-white rounded outline-none"
          />

          <button
            onClick={onSearch}
            className="bg-[#6ac045] text-white px-8 py-3 rounded"
          >
            Search
          </button>
        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          <select
            name="quality"
            value={filters.quality}
            onChange={handleChange}
            className="bg-[#232323] p-3 rounded text-white"
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
            className="bg-[#232323] p-3 rounded text-white"
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
            className="bg-[#232323] p-3 rounded text-white"
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
            className="bg-[#232323] p-3 rounded text-white"
          >
            <option value="year">Latest</option>
            <option value="rating">Rating</option>
            <option value="download_count">Popular</option>
          </select>

          <select
            name="with_rt_ratings"
            value={filters.with_rt_ratings}
            onChange={handleChange}
            className="bg-[#232323] p-3 rounded text-white"
          >
            <option value="false">No RT</option>
            <option value="true">With RT</option>
          </select>

        </div>

      </div>
    </div>
  );
}