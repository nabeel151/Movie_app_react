import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#1b1b1b] to-black border-b border-gray-800 px-8 py-3">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-block">
            <h1 className="text-[#6ac045] text-4xl font-bold tracking-tight">
              YTS
              <span className="text-[#6ac045] text-xl align-top">MX</span>
            </h1>
          </Link>
          <p className="text-gray-400 text-sm hidden lg:block">
            HD movies at the smallest file size.
          </p>
        </div>

        {/* CENTER SEARCH */}
        <div className="hidden md:flex relative w-[320px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Quick search"
            className="w-full bg-[#121212] border border-gray-700 rounded-full pl-10 pr-4 py-2 text-white outline-none focus:border-[#6ac045]"
          />
        </div>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-5 text-sm">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-[#6ac045] font-semibold">4K</a>
          <a href="#" className="text-gray-300 hover:text-white">Trending</a>
          <a href="#" className="text-gray-300 hover:text-white">Browse Movies</a>
          <a href="#" className="text-white font-semibold">Login</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-white font-semibold">Register</a>
        </div>

      </div>
    </nav>
  );
}