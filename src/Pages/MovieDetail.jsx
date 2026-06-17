import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Download } from "lucide-react";

import { getMovieDetail,getMovieSuggestions,} from "../Util/movie_suggestion";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const movieData = await getMovieDetail(id);
        setMovie(movieData);

        const suggestionData = await getMovieSuggestions(id);
        setSuggestions(suggestionData);
      } catch (err) {
        console.error("Error:", err);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  if (!movie) {
    return (
      <div className="text-white text-center py-20">Movie not found</div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-6 py-10">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col md:flex-row gap-10">

          {/* POSTER */}
          <div className="w-[280px] flex-shrink-0">
            <img
              src={movie.large_cover_image}
              alt={movie.title}
              className="rounded-lg shadow-lg w-full"
            />

            <button className="mt-4 w-full bg-[#6ac045] py-3 rounded font-semibold flex items-center justify-center gap-2">
              <Download size={18} />
              Download
            </button>
          </div>

          {/* INFO */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <div className="text-gray-300">
              {movie.year} • {movie.genres?.join(" / ")}
            </div>

            <p className="text-gray-400">{movie.description_full}</p>

            <div className="flex items-center gap-2">
              <Heart className="text-green-400" />
              {movie.like_count}
            </div>

            <div>⭐ IMDb: {movie.rating}/10</div>
          </div>
        </div>
      </div>

      {/* SUGGESTIONS */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>

        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-[500px]">
          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/movie/${item.id}`)}
              className="cursor-pointer group"
            >
              <div className="border-2 border-white rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={item.medium_cover_image}
                  alt={item.title}
                  className="w-full h-[240px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}