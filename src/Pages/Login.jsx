import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // later you can add API login here
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      navigate("/"); // redirect to movie list
    }
  };

  return (
    <div className="min-h-screen bg-[#1d1d1d] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#2b2b2b] rounded-xl shadow-lg p-8">

        {/* Logo */}
        <h1 className="text-center text-4xl font-bold text-[#6ac045] mb-8">
          YTS<span className="text-xl">MX</span>
        </h1>

        <h2 className="text-white text-2xl font-semibold mb-6">
          Login
        </h2>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-[#1d1d1d] text-white border border-gray-700"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-[#1d1d1d] text-white border border-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-[#6ac045] hover:bg-green-600 text-white py-3 rounded font-semibold"
          >
            Login
          </button>
        </form>

        {/* SIGNUP LINK */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#6ac045]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}