import { useQuery } from "@tanstack/react-query";
import {
  getMovieDetail,
  getMovieSuggestions,
} from "../Util/movie_suggestion";

export default function useMovieDetail(id) {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["movie-detail", id],
    queryFn: async () => {
      // Both requests start running at the same time
      const [movieData, suggestionData] = await Promise.all([
        getMovieDetail(id),
        getMovieSuggestions(id),
      ]);

      return {
        movie: movieData,
        suggestions: suggestionData,
      };
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
  return {
    movie: data?.movie || null,
    suggestions: data?.suggestions || [],
    loading: isLoading,
    error,
    refetch,
  };
}