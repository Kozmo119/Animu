import React from "react";
import { Link } from "react-router-dom";
import "./animeList.css"

function Anime({ anime }) {
  return (
    <div className="row1">
    <div className="row-poster1-container">
        <Link to={`/homepage/${anime.name}`}>
          <img className="row-poster1" src={anime.imageUrl} alt="hi" />
        </Link>
     
    </div>
    </div>
  );
}
 
export default Anime;
