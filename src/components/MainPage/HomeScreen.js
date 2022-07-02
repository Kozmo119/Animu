import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import AnimeList from "./BackApi/AnimeList";

const HomeScreen = () => {
  const [animesGenre, setAnimesGenre] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/genres")
      .then((response) => response.json())
      .then((data) => setAnimesGenre(data))
  }, []);

  return (
    <div className="homeScreen">
      <Nav />
      
      <Banner />
      <br />
      <br />
      <SearchBar/>
      <AnimeList animesGenre={animesGenre}/>
      {/* <Row animes={animes} />
      <Row animes={animes} />
      <Row animes={animes} />
      <Row animes={animes} />
      <Row animes={animes} /> */}
    </div>
  );
};

export default HomeScreen;
