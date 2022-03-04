import React from "react";

import "./FeedOptions.css";

const FeedOptions = ({ Icon, title, color }) => {
  return (
    <div className="app__feedOptions">
      {Icon && (
        <Icon
          className="app__feedOptions_icon"
          sx={{ color: color, fontSize: 25 }}
        />
      )}
      <p className="app__feedOptions_title">{title}</p>
    </div>
  );
};

export default FeedOptions;
