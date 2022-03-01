import React from "react";

import "./HeaderMenu.css";

const HeaderMenu = ({ Icon, title }) => {
  return (
    <div className="app__headerMenu">
      {Icon && <Icon className="app__headerMenu_icon" />}
      <h3 className="app__headerMenu_title">{title}</h3>
    </div>
  );
};

export default HeaderMenu;
