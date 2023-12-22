import * as React from "react";
import Icon from "src/common/Icon/Icon";
import Navigation from "../Navigation/Navigation";
import "./SideMenu.scss";

const SideMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleMenu = () =>
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);

  return (
    <nav className="menu" style={{ minWidth: isCollapsed ? "auto" : "306px" }}>
      <Icon
        icon="arrow"
        className={`menu__collaps ${!isCollapsed && "rotate"}`}
        onClick={toggleMenu}
      />
      <Navigation menuCollapsed={isCollapsed} />
      <a href="profile" className="menu__profile">
        <img
          src="/images/profile-pic.png"
          alt="profile picure"
          width={42}
          height={42}
          className="menu__profile--picture"
        />
        {!isCollapsed && (
          <div>
            <p id="name">Evano</p>
            <p id="job-title">Project Manager</p>
          </div>
        )}
      </a>
    </nav>
  );
};

export default SideMenu;
