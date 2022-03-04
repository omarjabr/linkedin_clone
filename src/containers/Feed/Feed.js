import React from "react";

import { AccountCircleRounded } from "@mui/icons-material";
import { FeedOptions } from "../../components";

import "./Feed.css";

const Feed = () => {
  return (
    <div className="app__feed">
      <div className="app__feed_top">
        <div className="app__feed_form">
          <AccountCircleRounded className="app__feed_top-avatar" />
          <div className="app__feed_form-container">
            <form action="" method="post">
              <input
                type="text"
                name="post"
                id="post"
                className="app__feed_top-input"
                placeholder="Start a post"
              />
              <button type="submit" className="app__feed_top-button"></button>
            </form>
          </div>
        </div>
        <div className="app__feed-options">
          <FeedOptions title="Photo" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
