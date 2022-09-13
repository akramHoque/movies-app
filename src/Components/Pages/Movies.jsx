import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar";
import NotAvailable from "../NotAvailable";
import SelectGenre from "../SelectGenre";
import Slider from "../Slider";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "./Store/firebase-config";

export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getGenres());
   }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "movies" }));
    }
  }, [genresLoaded]);



  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });


  return (
    <Container>

        <div className="navbar">
            <Navbar isScrolled={isScrolled} />
        </div>
        
        <div className="data">
        <SelectGenre genres={genres} />
            { movies.length ? <Slider movies={movies}/> :<NotAvailable />}
        </div>
    </Container>
  )
}

const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }


`