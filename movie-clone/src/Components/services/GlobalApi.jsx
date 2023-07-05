import axios from "axios";
const getMovieDisneyURL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=disney";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "681d9718854aac096a67aef629338501";

const movieBySearchBaseURL = "https://api.themoviedb.org/3/search/collection";
//https://api.themoviedb.org/3/search/collection?query=star%20wars&include_adult=false&language=en-US&page=1
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=681d9718854aac096a67aef629338501";

//'http://api.themoviedb.org/3/trending/all/day?api_key=681d9718854aac096a67aef629338501';

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieTrailer = (id) => {
  return axios.get(`${movieBaseUrl}/movie/${id}/videos?api_key=${api_key}`);
};

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
  movieBySearchBaseURL,
  getMovieTrailer,
};
