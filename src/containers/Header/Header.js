import React from "react";
import { SearchRounded } from "@mui/icons-material";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <img src="" alt="logo" />
        <div className="app__header-search">
          <SearchRounded />
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </div>
      <div className="app__header-right"></div>
    </div>
  );
};

export default Header;
