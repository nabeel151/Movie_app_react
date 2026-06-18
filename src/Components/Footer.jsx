export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 mt-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">

        {/* Links Navigation Layer */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium">
          <span className="text-white font-bold tracking-wide mr-2 w-full sm:w-auto mb-1 sm:mb-0">
            YTS © 2011 - 2026
          </span>

          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">Blog</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">DMCA</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">API</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">RSS</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">Contact</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">Browse Movies</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">Requests</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">Login</a>
          <a href="#" className="hover:text-[#6ac045] transition-colors duration-150">Language</a>
        </div>

        {/* Legal Notice Bottom Disclaimer */}
        <p className="text-[11px] sm:text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed pt-2">
          By using this site you agree to and accept our{" "}
          <a href="#" className="text-gray-500 hover:text-[#6ac045] underline transition-colors">
            User Agreement
          </a>
          , which can be read here.
        </p>

      </div>
    </footer>
  );
}