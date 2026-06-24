import { MoviesListContext } from "../context/appContext";
import useMovies from "../hooks/useMovies";

export default function MoviesListProvider({ children }) {
  const movieData = useMovies();

  return (
    <MoviesListContext.Provider value={movieData}>
      {children}
    </MoviesListContext.Provider>
  );
}