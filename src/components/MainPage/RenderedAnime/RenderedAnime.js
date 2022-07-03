import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("${chosenAnime[0].imageUrl}")`,
              backgroundPosition: "center, center",
            }}
          >
            <div className="banner-contents">
              <h1 className="banner-title">{chosenAnime[0].name}</h1>
              <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
              </div>
              <h1 className="banner-description">
                {truncate(chosenAnime[0].description, 150)}
              </h1>
            </div>
      
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

