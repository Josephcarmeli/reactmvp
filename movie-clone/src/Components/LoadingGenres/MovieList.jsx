import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
import YouTube from "react-youtube";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const elementRef = useRef(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      // console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const handleMovieClick = (movie) => {
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

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{
            height: "390",
            width: "100%",
            playerVars: {
              autoplay: 1,
              controls: 1,
              modestbranding: 1,
            },
          }}
          className="w-full max-w-xl mx-auto mt-4"
        />
      )}
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
      >
        {movieList.map((item, index) => {
          const isFavorite = favorites.some(
            (favorite) => favorite.id === item.id
          );
          return (
            <React.Fragment key={index}>
              {index_ % 3 == 0 ? (
                <HrMovieCard movie={item} handleMovieClick={handleMovieClick} />
              ) : (
                <MovieCard movie={item} handleMovieClick={handleMovieClick} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
