import * as React from "react";
import { NavLink } from "react-router-dom";
import Icon from "src/common/Icon/Icon";
import { DefaultRoutes } from "src/Router";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div>
      <a href="/" className="menu__logo">
        <img src="./logo.svg" alt="CRM Dashboard Logo" width={37} height={37} />
        <p className="menu__logo--title">
          Dashboard<span className="menu__logo--text">v.01</span>
        </p>
      </a>
      <ul className="navigation">
        {Object.keys(DefaultRoutes).map(
          (route, index) =>
            route !== "profile" && (
              <li key={index}>
                <NavLink className="navigation__link" to={route}>
                  <Icon icon={route} width={24} height={24} />
                  {route}
                  {route !== "dashboard" && (
                    <Icon
                      icon="arrow"
                      id="arrow"
                      width={16}
                      height={16}
                      className="navigation__link--arrow"
                    />
                  )}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
