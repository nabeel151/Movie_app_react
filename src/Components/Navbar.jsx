import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#1b1b1b] to-black border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto h-20 px-6 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4 min-w-[260px]">
          <Link to="/">
            <h1 className="text-[#6ac045] text-4xl font-bold tracking-tight">
              YTS
              <span className="text-xl align-top">MX</span>
            </h1>
          </Link>

          <p className="text-gray-400 text-sm hidden xl:block">
            HD movies at the smallest file size.
          </p>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-[380px]">
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
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm min-w-fit">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>

          <Link className="text-[#6ac045] font-semibold">
            4K
          </Link>

          <Link className="text-gray-300 hover:text-white">
            Trending
          </Link>

          <Link className="text-gray-300 hover:text-white hidden xl:block">
            Browse Movies
          </Link>

          <div className="flex items-center gap-3 ml-2">
            <Link to="/login" className="text-white hover:text-[#6ac045]">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-[#6ac045] px-4 py-2 rounded-lg text-white font-medium hover:bg-green-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}