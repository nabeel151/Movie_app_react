import { MOVIES_LIST_ENDPOINT } from "./config";

export const fetchMoviesAPI = async (page, filters) => {
  let url = `${MOVIES_LIST_ENDPOINT}?page=${page}`;

  if (filters.query_term) {
    url += `&query_term=${filters.query_term}`;
  }

  if (filters.quality) {
    url += `&quality=${filters.quality}`;
  }

  if (filters.genre) {
    url += `&genre=${filters.genre}`;
  }

  if (filters.minimum_rating !== "") {
    url += `&minimum_rating=${filters.minimum_rating}`;
  }

  if (filters.sort_by) {
    url += `&sort_by=${filters.sort_by}`;
  }

  if (filters.with_rt_ratings) {
    url += `&with_rt_ratings=${filters.with_rt_ratings}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return data?.data?.movies || [];
};