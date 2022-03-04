import React from "react";

import "./FeedOptions.css";

const FeedOptions = ({ Icon, title }) => {
  return (
    <div className="app__feedOptions">
      {Icon && <Icon className="app__feedOptions_icon" />}
      <p className="app__feedOptions_title">{title}</p>
    </div>
  );
};

export default FeedOptions;
