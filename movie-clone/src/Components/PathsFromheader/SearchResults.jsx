function SearchResults({ results }) {
  const [favorites, setFavorites] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleMovieClick = (movie) => {
    // do something when a movie is clicked
    // for example, fetching and setting the trailer URL
    GlobalApi.getMovieTrailer(movie.id)
      .then((res) => {
        const results = res.data.results;
        const youtubeTrailer = results.find(
          (result) => result.site === "YouTube"
        );
        if (youtubeTrailer) {
          setTrailerUrl(youtubeTrailer.key);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-wrap justify-around">
      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={{ height: "390", width: "640" }} />
      )}
      {results.map((item, index) => {
        const isFavorite = favorites.some(
          (favorite) => favorite.id === item.id
        );
        return (
          <React.Fragment key={index}>
            <MovieCard movie={item} handleMovieClick={handleMovieClick} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SearchResults;
