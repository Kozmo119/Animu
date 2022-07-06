import React from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "./Filter/Filter";

function SearchBar() {
  return (
    <div className="searchBar">
      <h1 className="searchBar-title">Explore Animu</h1>
      <div className="filter-container">
        <div className="filter-input">
          <label className="filter-label">Search</label>
          <input />
        </div>
        <div className="filter-input">
         <Filter />
        </div>
        <div className="filter-input">
          <label className="filter-label">?</label>
          <input />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
