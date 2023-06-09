import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "681d9718854aac096a67aef629338501";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=681d9718854aac096a67aef629338501";
//'http://api.themoviedb.org/3/trending/all/day?api_key=681d9718854aac096a67aef629338501';
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
