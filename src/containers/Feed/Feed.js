import React from "react";

import { AccountCircleRounded } from "@mui/icons-material";

import "./Feed.css";

const Feed = () => {
  return (
    <div className="app__feed">
      <div className="app__feed_top">
        <AccountCircleRounded />
        <form action="" method="post">
          <input type="text" name="post" id="post" />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
