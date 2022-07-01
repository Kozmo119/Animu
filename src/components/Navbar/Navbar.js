import logo from "./logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { height } from "@mui/system";



const Navbar = () => {
  return (
    <div className="story-header-container">
      <div className="story-header">
       
        <img
          className="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          style={{
            width: "85px",
            height: "75px",
          }}
          alt="logo"
        />
        <Link to='/login'>
        <button className="signin-button" style={{ height: "2rem",
      width: "6rem"}}>Sign in</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
