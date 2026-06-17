import { MOVIES_DETAIL_ENDPOINT } from "../Util/config";

//  Get Movie Detail
export const getMovieDetail = async (id) => {
  const res = await fetch(`${MOVIES_DETAIL_ENDPOINT}?movie_id=${id}`);
  const data = await res.json();
  return data?.data?.movie || null;
};

//  Get Movie Suggestions
export const getMovieSuggestions = async (id) => {
  const res = await fetch(
    `${MOVIES_DETAIL_ENDPOINT.replace(
      "movie_details",
      "movie_suggestions"
    )}?movie_id=${id}`
  );

  const data = await res.json();
  return data?.data?.movies || [];
};