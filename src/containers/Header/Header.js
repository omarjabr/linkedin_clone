import React from "react";
import {
  SearchRounded,
  HomeRounded,
  HomeRepairServiceRounded,
  PeopleAltRounded,
  SendRounded,
  NotificationsRounded,
  AccountCircleRounded,
  AppsRounded,
} from "@mui/icons-material";
import "./Header.css";
import { HeaderMenu } from "../../components";

const navMenuList = [
  {
    title: "Home",
    icon: HomeRounded,
  },
  {
    title: "My Network",
    icon: PeopleAltRounded,
  },
  {
    title: "Jobs",
    icon: HomeRepairServiceRounded,
  },
  {
    title: "Messaging",
    icon: SendRounded,
  },
  {
    title: "Notifications",
    icon: NotificationsRounded,
  },
  {
    title: "Me",
    icon: AccountCircleRounded,
  },
];

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header_left">
        <img
          src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
          alt="logo"
        />
        <div className="app__header_search">
          <SearchRounded />
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </div>
      <div className="app__header_right">
        {navMenuList.map((item, index) => (
          <HeaderMenu key={index} Icon={item.icon} title={item.title} />
        ))}
        <span className="app__header_separator" />
        <HeaderMenu Icon={AppsRounded} title="Work" />
      </div>
    </div>
  );
};

export default Header;
