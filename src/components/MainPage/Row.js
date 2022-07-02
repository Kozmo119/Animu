import React from "react";
import "./row.css";
import { useState, useEffect } from "react";
import axios from "./axios";
import Anime from "./BackApi/Anime";

function Row({ title, fetchUrl, isLargeRow = false }) {
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

  console.log(animeGenre.animes?.map((anime) => anime.name));

  return (
    <div className="row">
      <h2>{animeGenre.name}</h2>
      <div className="row-posters">
          {animeGenre.animes?.map((anime) => {
            return <img className="row-poster" src={anime.imageUrl} alt={anime.name} />;
          })}
        ;
      </div>
    </div>
  );
}

export default Row;

// return (
//   <div className="row">
//     <h2>{title}</h2>
//     {/* {movies.map(movie => (<img src={movie.imageUrl} alt={movie.name}/>))} */}

//     <div className="row-posters">
//     <img className="row-poster"
//       src={
//         "https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-21.jpg"
//       }
//       alt="poster"
//     />

//     </div>
//   </div>
// );
