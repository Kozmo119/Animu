import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./renderedAnime.css"

const RenderedAnime = ({ renderedAnime }) => {
  const params = useParams();

  const [chosenAnime, setchosenAnime] = useState();

  useEffect(() => {
    if (renderedAnime.length) {
      let filterChecker = renderedAnime.filter((anime) => {
        if (anime.name == params.animeName) {
          return anime;
        }
        // console.log(anime)
      });
      // console.log(filterChecker)
      setchosenAnime(filterChecker);
    }
  }, [renderedAnime]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <>
      {chosenAnime ? (
        <>
          {
            <header
            className="banner">
            <img className="banner-dynamic" src={chosenAnime[0].coverImage} alt={chosenAnime[0].name}/>
      
            <div className="banner--fadeButtom" />
          </header>

          }
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default RenderedAnime;

