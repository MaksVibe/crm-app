import * as React from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import SideMenu from "../SideMenu/SideMenu";
import "./Layout.scss";

type LayoutProps = {
  children: React.JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <SideMenu />
      <main className="layout__page">
        <p className="layout__page--heading">Hello Evano 👋🏼,</p>
        {children}
      </main>
      {window && window.innerWidth < 768 && <MobileMenu />}
    </div>
  );
}
