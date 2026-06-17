import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function MovieCard({ movie }) {
   const navigate = useNavigate();
  return (
    <div className="rounded overflow-hidden h-[520px] flex flex-col ">

      {/* IMAGE SECTION (ONLY THIS HAS HOVER BORDER) */}
      <div className="group relative border-5 border-transparent hover:border-[#eaeee9] overflow-hidden">

        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          className="w-full h-85 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">

          <div className="flex flex-col items-center gap-1 text-xl font-bold">
            <Star className="w-5 h-5 text-green-400 fill-green-700" />
            <span>{movie.rating}/10</span>
          </div>

          <div className="mt-2 text-sm text-gray-300">
            {movie.genres?.slice(0, 2).join(", ")}
          </div>

         <button
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="mt-4 bg-[#6ac045] px-5 py-2 rounded-full text-sm font-semibold"
          >
            View Details
          </button>
        </div>
      </div>

      {/* TEXT SECTION (NO BORDER, NO HOVER) */}
      <div className="p-3 bg-[#111] flex-1">
        <h3 className="text-white font-semibold truncate">
          {movie.title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {movie.year}
        </p>
      </div>
    </div>
  );
}