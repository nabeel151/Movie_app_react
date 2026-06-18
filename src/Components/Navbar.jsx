import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#1b1b1b] to-black border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto h-16 md:h-20 px-4 sm:px-6 flex items-center justify-between">
        
        {/* LEFT SECTION: Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <h1 className="text-[#6ac045] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              YTS
              <span className="text-xs sm:text-sm md:text-xl align-top ml-0.5">MX</span>
            </h1>
          </Link>
          <p className="text-gray-400 text-sm hidden xl:block">
            HD movies at the smallest file size.
          </p>
        </div>

        {/* CENTER SECTION: Desktop Search */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-[380px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Quick search"
              className="w-full bg-[#121212] border border-gray-700 rounded-full pl-10 pr-4 py-2 text-white text-sm outline-none focus:border-[#6ac045]"
            />
          </div>
        </div>

        {/* RIGHT SECTION: Desktop Links & Actions */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link className="text-[#6ac045] font-semibold hover:opacity-80">
            4K
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors">
            Trending
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors hidden xl:block">
            Browse Movies
          </Link>

          <div className="flex items-center gap-3 ml-2">
            <Link to="/login" className="text-white hover:text-[#6ac045] transition-colors">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#6ac045] px-4 py-2 rounded-lg text-white font-medium hover:bg-green-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* MOBILE ACTIONS: Burger Button & Mobile Search Icon */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile Search Toggle Target (Optional feature styling layout anchor) */}
          <button className="text-gray-400 hover:text-white p-1" aria-label="Search">
            <Search size={22} className="block lg:hidden" />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-[#121212] border-b border-gray-800 px-4 py-6 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        {/* Mobile Search Input */}
        <div className="relative w-full mb-6">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-full bg-[#1b1b1b] border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm outline-none focus:border-[#6ac045]"
          />
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-4 font-medium text-base border-b border-gray-800 pb-6 mb-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} className="text-[#6ac045]">
            4K Movies
          </Link>
          <Link onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            Trending
          </Link>
          <Link onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            Browse Movies
          </Link>
        </div>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full text-center border border-gray-700 py-2.5 rounded-lg text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-[#6ac045] py-2.5 rounded-lg text-white font-medium hover:bg-green-600 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}