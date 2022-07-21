const key = "5b0c67861778a9759cf773aaf2065c87";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
};

export default requests;
