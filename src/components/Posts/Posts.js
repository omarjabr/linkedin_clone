import React from "react";

import {
  AccountCircleRounded,
  MoreHorizRounded,
  PublicRounded,
  ThumbUpAltOutlined,
  CommentOutlined,
  ShareOutlined,
  SendOutlined,
} from "@mui/icons-material";

import FeedOptions from "../FeedOptions/FeedOptions";

import "./Posts.css";

const postOptionsList = [
  {
    title: "Like",
    icon: ThumbUpAltOutlined,
    color: "#808080",
  },
  {
    title: "Comment",
    icon: CommentOutlined,
    color: "#808080",
  },
  {
    title: "Share",
    icon: ShareOutlined,
    color: "#808080",
  },
  {
    title: "Send",
    icon: SendOutlined,
    color: "#808080",
  },
];

const Posts = () => {
  return (
    <div className="app__posts">
      <div className="app__posts_top">
        <div className="app__posts_account">
          <AccountCircleRounded sx={{ color: "#808080", fontSize: 55 }} />
          <div className="app__posts_account-info">
            <h3 className="app__posts_account-name">Mohamad Omar Jabr</h3>
            <p className="app__posts_account-details">Web Developer</p>
            <div className="app__posts_time">
              <p className="app__posts_account-details">3d • </p>
              <PublicRounded sx={{ color: "#808080", fontSize: 16 }} />
            </div>
          </div>
        </div>
        <MoreHorizRounded />
      </div>
      <div className="app__posts_content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          voluptatem amet nobis! Tempore rem recusandae odit neque porro
          mollitia exercitationem, at minima error magni explicabo maxime beatae
          excepturi, quasi quia.
        </p>
      </div>
      <div className="app__posts_options">
        {postOptionsList.map((item, index) => (
          <FeedOptions
            key={index}
            Icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
