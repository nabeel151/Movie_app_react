export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Top Links */}
        <div className="text-sm flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span className="text-white font-semibold">
            YTS © 2011 - 2026
          </span>

          <span>-</span>
          <a href="#" className="hover:text-white">Blog</a>
          <span>-</span>
          <a href="#" className="hover:text-white">DMCA</a>
          <span>-</span>
          <a href="#" className="hover:text-white">API</a>
          <span>-</span>
          <a href="#" className="hover:text-white">RSS</a>
          <span>-</span>
          <a href="#" className="hover:text-white">Contact</a>
          <span>-</span>
          <a href="#" className="hover:text-white">Browse Movies</a>
          <span>-</span>
          <a href="#" className="hover:text-white">Requests</a>
          <span>-</span>
          <a href="#" className="hover:text-white">Login</a>
          <span>-</span>
          <a href="#" className="hover:text-white">Language</a>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-gray-500 mt-3">
          By using this site you agree to and accept our{" "}
          <a href="#" className="text-gray-400 hover:text-white underline">
            User Agreement
          </a>
          , which can be read here.
        </p>

      </div>
    </footer>
  );
}