import useMovieDetail from "../hooks/useMovieDetail";
import { MovieDetailContext } from "../context/appContext";

export function MovieDetailProvider({ children }) {
  const value = useMovieDetail();

  return (
    <MovieDetailContext.Provider value={value}>
      {children}
    </MovieDetailContext.Provider>
  );
}