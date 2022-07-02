import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import AnimeList from "./BackApi/AnimeList";
import Request from "./Requests";

const HomeScreen = () => {
  const [animesGenre, setAnimesGenre] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/genres")
      .then((response) => response.json())
      .then((data) => setAnimesGenre(data));
  }, []);

  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
      <br />
      <br />
      <SearchBar />
      {/* <AnimeList animesGenre={animesGenre}/> */}
      <Row title="Comedy" fetchUrl={Request.fetchComedyAnimes} />
      <Row title="Action" fetchUrl={Request.fetchActionAnimes} />
      <Row title="Ecchi" fetchUrl={Request.fetchEcchiAnimes} />
    </div>
  );
};

export default HomeScreen;
