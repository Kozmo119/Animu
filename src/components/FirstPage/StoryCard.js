// import zenitsu from "./zenitsu.mp4";
import MoreInfo from "./MoreInfo";
import './storyCard.css';
import demonSlayer from "./demonSlayer.mp4"
import Footer from "../Footer/Footer";


const StoryCard = () => {
  return (
    <div className="story-card-main">




      <div className="story-card">
          
        <div className="story-card-background">
            
            
          <div className="vid-wrapper">
            <img src="https://www.fanbolt.com/storage/2021/08/anime-iphone-wallpaper-800x500.jpg" alt="wallpaper"/>
            <div className="vid-gradient"> <div className="card-text">
      <div className="text-container">
      <h1 className="header">Unlimited Anime and more</h1>

      <h3 className="header-text">Watch your favourite anime anywhere for free.</h3>
      <h3 className="header-text">
        Ready to watch? Click on Sign in.
      </h3>
      <br />
      </div>
    </div></div>
           
          </div>
          
        </div>
        
      </div>

     

    <MoreInfo/>
    <Footer />


    </div>
  );
};

export default StoryCard;
