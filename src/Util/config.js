// export const BASE_URL = import.meta.BASE_URL;
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const MOVIES_LIST_ENDPOINT = `${BASE_URL}/list_movies.json`;
export const MOVIES_LIST_ENDPOINT =`${BASE_URL}/api/v2/list_movies.json`;

// export const MOVIES_DETAIL_ENDPOINT = `${BASE_URL}/api/v2/movie_detail.json`;
export const MOVIES_DETAIL_ENDPOINT = `${BASE_URL}/api/v2/movie_details.json`;

export const MOVIES_SUGGESTIONS_ENDPOINT = `${BASE_URL}/api/v2/movie_suggestions.json`;

