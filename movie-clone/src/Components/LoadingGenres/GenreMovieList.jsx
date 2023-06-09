import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 6 && (
            <div key={item.id} className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold"> {item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

{
  /* <p>{isLiked ? <AiFillHeart /> : <AiOutlineHeart />}</p> */
}

export default GenreMovieList;
