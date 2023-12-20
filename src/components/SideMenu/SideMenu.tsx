import * as React from "react";
import Navigation from "../Navigation/Navigation";
import "./SideMenu.scss";

const SideMenu: React.FC = () => {
  return (
    <nav className="menu">
      <Navigation />
      <a href="profile" className="menu__profile">
        <img
          src="images/profile-pic.png"
          alt="profile picure"
          width={42}
          height={42}
          className="menu__profile--picture"
        />
        <div>
          <p id="name">Evano</p>
          <p id="job-title">Project Manager</p>
        </div>
      </a>
    </nav>
  );
};

export default SideMenu;
