import React from "react";
import { Link } from "react-router-dom";

function Anime({ anime }) {
  return (
    <div className="row">
      <h2>{anime.name}</h2>
      <div className="row-posters">
        <Link to={`/homepage/${anime.name}`}>
          <img className="row-poster" src={anime.imageUrl} alt="hi" />
        </Link>
      </div>
    </div>
  );
}

export default Anime;
