import { Routes, Route } from "react-router-dom";
import MoviesList from "./Pages/MoviesList";
import MovieDetail from "./Pages/MovieDetail";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#111] min-h-screen text-white">
      <Navbar />

      <div className="pt-20">
        <Routes>
        <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;