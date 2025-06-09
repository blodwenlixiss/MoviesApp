export const TMBDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMBDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMBDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMBDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();

  return data;
};

export const movieDetails = async (id: string) => {
  const response = await fetch(
    `${TMBDB_CONFIG.BASE_URL}/movie/${id}?api_key=${TMBDB_CONFIG.API_KEY}`,
    {
      method: "GET",
      headers: TMBDB_CONFIG.headers,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();

  return data;
};

export const upComingMovies = async () => {
  const response = await fetch(
    `${TMBDB_CONFIG.BASE_URL}/movie/upcoming?language=en-US&page=1`,
    {
      method: "GET",
      headers: TMBDB_CONFIG.headers,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }
  const data = await response.json();

  return data.results;
};
