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

  return (
    <>
      {chosenAnime ? (
        <>
          {
            <>
              <div>
                <h1>Chosen Anime:</h1>
                <h2>{chosenAnime[0].name}</h2>
                <br />
                <img src={chosenAnime[0].imageUrl} alt="" />
              </div>
            </>
          }
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default RenderedAnime;
