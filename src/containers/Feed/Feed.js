import React, { useEffect, useState } from "react";

import {
  AccountCircleRounded,
  PhotoSizeSelectActualRounded,
  VideoCallRounded,
  EventAvailableRounded,
  ArticleRounded,
  ArrowDropDownRounded,
} from "@mui/icons-material";
import { FeedOptions, Posts } from "../../components";

import "./Feed.css";
import { db } from "../../backend/firebase";

const feedOptionsList = [
  {
    title: "Photo",
    icon: PhotoSizeSelectActualRounded,
    color: "#70b5f9",
  },
  {
    title: "Video",
    icon: VideoCallRounded,
    color: "#7fc15e",
  },
  {
    title: "Event",
    icon: EventAvailableRounded,
    color: "#e7a33e",
  },
  {
    title: "Write article",
    icon: ArticleRounded,
    color: "#fc9295",
  },
];

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app__feed">
      <div className="app__feed_top">
        <div className="app__feed_form">
          <AccountCircleRounded className="app__feed_top-avatar" />
          <div className="app__feed_form-container">
            <form>
              <input
                type="text"
                name="post"
                id="post"
                className="app__feed_top-input"
                placeholder="Start a post"
              />
              <button
                type="submit"
                onClick={sendPost}
                className="app__feed_top-button"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="app__feed-options">
          {feedOptionsList.map((item, index) => (
            <FeedOptions
              key={index}
              Icon={item.icon}
              title={item.title}
              color={item.color}
            />
          ))}
        </div>
      </div>
      <div className="app__feed_divider">
        <span></span>
        <p>
          Sort by: <span>Top</span>
        </p>
        <ArrowDropDownRounded />
      </div>
      <div className="app__feed_bottom">
        {posts.map((post) => (
          <Posts
            name="Mohamad Omar Jabr"
            description="Web Developer"
            message="New Message"
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
