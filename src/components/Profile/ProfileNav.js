import React from "react";
import "./ProfileNav.css";
import { Link } from "react-router-dom";

function ProfileNav() {
  return (
    <div className="profileNav-container">
        <div className="profileNavContainer">
      <h1>Overview</h1>
      <Link to='/homepage' style={{textDecoration: "none", color: "black"}}>
      <h1>Anime List</h1>
      </Link>
      <h1>Watch List</h1>
      <h1>Favourites</h1>
      <h1>Reviews</h1>
      </div>
    </div>
  );
}

export default ProfileNav;
