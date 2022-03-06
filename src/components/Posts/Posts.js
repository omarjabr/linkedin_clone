import React from "react";

import {
  AccountCircleRounded,
  MoreHorizRounded,
  PublicRounded,
} from "@mui/icons-material";

import "./Posts.css";

const Posts = () => {
  return (
    <div className="app__posts">
      <div className="app__posts_top">
        <div className="app__posts_account">
          <AccountCircleRounded sx={{ color: "#808080", fontSize: 45 }} />
          <div className="app__posts_account-info">
            <p className="app__posts_account-name">Mohamad Omar Jabr</p>
            <p className="app__posts_account-details">Web Developer</p>
            <div className="app__posts_time">
              <p className="app__posts_account-details">3d • </p>
              <PublicRounded sx={{ color: "#808080", fontSize: 18 }} />
            </div>
          </div>
        </div>
        <MoreHorizRounded />
      </div>
    </div>
  );
};

export default Posts;
