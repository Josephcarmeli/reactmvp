import { useState, useEffect, useContext } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Login from "./Components/BeforeLogin/Login";
import AuthContext from "./context/AuthContext";
import "./App.css";
import Signup from "./Components/BeforeLogin/Signup";
import Head from "./Components/AfterLogin/Head";
import GenreMovieList from "./Components/LoadingGenres/GenreMovieList";
import ProductionHouse from "./Components/ProductionHouse/ProductionHouse";
import Slider from "./Components/slider/Slider";
import Search from "./Components/PathsFromheader/Search";
import Series from "./Components/PathsFromheader/Series";
import Movies from "./Components/PathsFromheader/Movies";
import Orignals from "./Components/PathsFromheader/Orignals";
import WatchList from "./Components/PathsFromheader/WatchList";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const currentUser =
      localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (
      !currentUser &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup"
    ) {
      navigate("/signup");
    }
  }, [navigate]);
  return (
    <>
      <Head />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Slider /> <ProductionHouse /> <GenreMovieList />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/series" element={<Series />} />
        <Route path="/originals" element={<Orignals />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
