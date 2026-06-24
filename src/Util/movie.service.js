import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchMoviesAPI = async (page, filters) => {
  const url = `${BASE_URL}/api/v2/list_movies.json`;

  const params = {
    page,
    sort_by: filters.sort_by,
    quality: filters.quality,
    genre: filters.genre,
    minimum_rating: filters.minimum_rating,
    query_term: filters.query_term,
    with_rt_ratings: filters.with_rt_ratings,
  };

  const res = await axios.get(url, { params });

  return res.data.data.movies;
};