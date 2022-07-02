import React from "react";
import "./row.css";

function Row({ animes }) {
  
  return (
    <div className="row">
      <h2>This is a title test</h2>
      <div className="row-posters">
      <img className="row-poster"
        src={
          "https://thesmartlocal.com/japan/wp-content/uploads/2020/03/Top-Anime-Movies-21.jpg"
        }
        alt="poster"
      />
       
      </div>
    </div>
  );
}

export default Row;
