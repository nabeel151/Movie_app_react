import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#2b2b2b] rounded-xl shadow-lg p-8">
        {/* Logo */}
        <h1 className="text-center text-4xl font-bold text-[#6ac045] mb-8">
          YTS<span className="text-xl">MX</span>
        </h1>

        <h2 className="text-white text-2xl font-semibold mb-6">Sign Up</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-[#1d1d1d] text-white border border-gray-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-[#1d1d1d] text-white border border-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-[#1d1d1d] text-white border border-gray-700"
          />

          <button className="w-full bg-[#6ac045] hover:bg-green-600 text-white py-3 rounded font-semibold">
            Create Account
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#6ac045]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}