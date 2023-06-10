import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [count, setcount] = useState(0);
  useEffect(() => {
    const currentUser =
      localStorage.getItem("token") !== "undefined"
        ? JSON.parse(localStorage.getItem("token"))
        : localStorage.clear();
    if (
      !currentUser &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup" &&
      window.location.pathname !== "/home"
    ) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
