import React from "react";

import { AccountCircleRounded, BookmarkRounded } from "@mui/icons-material";
import "./Sidebar.css";

const recentCollection = [
  "middleeast",
  "customerrelations",
  "consultants",
  "mysql",
  "operatingsystems",
];

const Sidebar = () => {
  return (
    <div className="app__sidebar">
      <div className="app__sidebar_top">
        <div className="app__sidebar_section-1">
          <img
            src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
            alt="cover image"
          />
          <AccountCircleRounded className="app__sidebar_avatar" />
          <h2 className="app__sidebar_title">Mohamad Omar Jabr</h2>
          <p className="app__sidebar_description">Developer at QuietClicks</p>
        </div>
        <div className="app__sidebar_section-2">
          <div className="app__sidebar_section-row">
            <p>Who viewed your profile</p>
            <span>9</span>
          </div>
          <div className="app__sidebar_section-row">
            <p>Connections</p>
            <span>100</span>
          </div>
        </div>
        <div className="app__sidebar_section-3">
          <BookmarkRounded className="app__sidebar_section-icon" />
          <p>My items</p>
        </div>
      </div>
      <div className="app__sidebar_bottom">
        <div className="app__sidebar_section-4">
          <p className="app__sidebar_section-title">Recent</p>
          {recentCollection.map((item, index) => (
            <div className="app__sidebar_recent-collection" key={index}>
              <span>#</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="app__sidebar_section-5">
          <p>Discover more</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
