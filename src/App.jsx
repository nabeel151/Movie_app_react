import { Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#111] min-h-screen text-white">
      <Navbar />

      <div className="pt-20">
        <Routes>
        <Route path="/movies" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;