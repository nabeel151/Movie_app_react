import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Download } from "lucide-react";

import { getMovieDetail, getMovieSuggestions } from "../Util/movie_suggestion";

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
        <div className="bg-[#0f0f0f] text-white min-h-screen px-4 py-6 sm:px-6 sm:py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                {/* ================= LEFT SIDE (Movie Details) ================= */}
                <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6 sm:gap-10">

                    {/* Poster - Responsive Width */}
                    <div className="w-full xs:w-[280px] sm:w-[240px] md:w-[280px] mx-auto sm:mx-0 flex-shrink-0">
                        <img
                            src={movie.large_cover_image}
                            alt={movie.title}
                            className="rounded-lg shadow-lg w-full object-cover"
                        />

                        <button className="mt-4 w-full bg-[#6ac045] hover:bg-[#5bb237] transition py-3 rounded font-semibold flex items-center justify-center gap-2">
                            <Download size={18} />
                            Download
                        </button>
                    </div>

                    {/* Movie Info */}
                    <div className="flex-1 space-y-4 text-center sm:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>

                        <div className="text-gray-300 text-sm md:text-base">
                            {movie.year} • {movie.genres?.join(" / ")}
                        </div>

                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                            {movie.description_full}
                        </p>

                        <div className="flex items-center justify-center sm:justify-start gap-2">
                            <Heart className="text-green-400" />
                            <span>{movie.like_count}</span>
                        </div>

                        <div className="text-sm md:text-base">⭐ IMDb: {movie.rating}/10</div>
                    </div>
                </div>

                {/* ================= RIGHT SIDE (Suggestions Grid) ================= */}
                <div className="border-t border-gray-800 pt-8 lg:border-t-0 lg:pt-0">
                    <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Similar Movies</h2>

                    {/* Adaptive grid: 2 cols on tiny screens, 3 cols on mid-mobile/tablets, 2 cols when pushed to the side on desktop */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">

                        {suggestions.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/movie/${item.id}`)}
                                className="cursor-pointer group"
                            >
                                <div className="bg-[#1a1a1a] rounded-md overflow-hidden hover:scale-105 transition duration-200 h-full flex flex-col">
                                    
                                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[160px] overflow-hidden">
                                        <img
                                            src={item.medium_cover_image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-3 flex-1 flex flex-col justify-between">
                                        <p className="text-sm font-semibold truncate group-hover:text-[#6ac045] transition">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">{item.year}</p>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
}