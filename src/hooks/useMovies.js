import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesAPI } from "../Util/movie.service";

export default function useMovies() {
  // UI State (ye React Query handle nahi karta)
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    query_term: "",
    quality: "",
    genre: "",
    minimum_rating: "",
    sort_by: "year",
    with_rt_ratings: "",
  });

  // Server State (React Query handle karega)
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["movies", page, filters],
    queryFn: () => fetchMoviesAPI(page, filters),

    // optional settings
    staleTime: 1000 * 60 * 5, // 5 minutes cache fresh
    retry: 2,
  });

  return {
    movies: data || [],
    page,
    setPage,
    filters,
    setFilters,
    loading: isLoading,
    error,
    refetch,
  };
}