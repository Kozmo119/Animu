import React from "react";
import animateScroll from "react-scroll/modules/mixins/animate-scroll";
import Anime from "./Anime";

function AnimeList({ animesGenre }) {
  const animeComponents = animesGenre.map((anime) => {
    return anime.animes.map((secondAnime) => {
        return <Anime key={secondAnime.id} anime={secondAnime} />;
    })
  });

  return <div className="flex">{animeComponents}</div>;
}

export default AnimeList;
