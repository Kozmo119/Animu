import React from "react";
import "./row.css";
import { useState, useEffect } from "react";
import axios from "./axios";
import Anime from "./BackApi/Anime";
import { Link } from "react-router-dom";

function Row({ title, fetchUrl }) {
  const [animeGenre, setAnimeGenre] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setAnimeGenre(request.data);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // const animeComponents = {animeGenre.map((anime)=>{
  //     return anime.animes.map((secondAnime) => {
  //   return <img key={secondAnime.id} src={anime.imageUrl} alt={anime.name} />;
  //     })
  //   })

  // console.log(animeGenre.animes?.map((anime) => anime.name));

  return (
    <div className="row">
      <h2>{animeGenre.name}</h2>
      <div className="row-posters">
        {animeGenre.animes?.map((anime) => (
          <Link style={{textDecoration:"none"}} to={`/homepage/${anime.name}`}>
              <div className="single-team">
      <img
        className="row-poster"
        src={anime.imageUrl}
        alt={anime.name}
        key={anime.id}
      />
      <div className="team-text">
        <h4>{anime.name}</h4>
        <p>{anime.rating}/10</p>
      </div>
    </div>
              </Link>
          
          ))}
      </div>
    </div>
  );
}

export default Row;
