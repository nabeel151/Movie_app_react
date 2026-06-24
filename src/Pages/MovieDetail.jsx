import { useParams, useNavigate } from "react-router-dom";
import { Heart, Download } from "lucide-react";

import useMovieDetail from "../hooks/useMovieDetail";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    movie,
    suggestions,
    loading,
  } = useMovieDetail(id);

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-white text-center py-20">
        Movie not found
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        
        {/* LEFT */}
        <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="w-full sm:w-[260px] mx-auto sm:mx-0 flex-shrink-0">
            <img
              src={movie.large_cover_image}
              alt={movie.title}
              className="rounded-lg shadow-lg w-full"
            />

            <button className="mt-4 w-full bg-[#6ac045] hover:bg-[#5bb237] py-3 rounded flex items-center justify-center gap-2">
              <Download size={18} />
              Download
            </button>
          </div>

          <div className="flex-1 space-y-4 text-center sm:text-left">
            <h1 className="text-3xl font-bold">{movie.title}</h1>

            <div className="text-gray-300">
              {movie.year} • {movie.genres?.join(" / ")}
            </div>

            <p className="text-gray-400 text-sm">
              {movie.description_full}
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Heart className="text-green-400" />
              <span>{movie.like_count}</span>
            </div>

            <div>⭐ IMDb: {movie.rating}/10</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="pt-8 lg:pt-0">
          <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {suggestions.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/movie/${item.id}`)}
                className="cursor-pointer bg-[#1a1a1a] rounded-md overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={item.medium_cover_image}
                  alt={item.title}
                  className="w-full h-[160px] object-cover"
                />

                <div className="p-3">
                  <p className="text-sm font-semibold truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}