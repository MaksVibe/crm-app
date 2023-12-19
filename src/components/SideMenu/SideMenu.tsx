import * as React from "react";
import { NavLink } from "react-router-dom";
import { DefaultRoutes } from "../../Router";
interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
  return (
    <nav>
      <ul>
        {Object.keys(DefaultRoutes).map((route, index) => (
          <li key={index}>
            <NavLink
              to={route}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "red" : "inherit",
                };
              }}
            >
              {route}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
