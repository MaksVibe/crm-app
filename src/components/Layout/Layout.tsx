import * as React from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./Layout.scss";

type LayoutProps = {
  children: React.JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <SideMenu />
      <main className="layout__page">{children}</main>
    </div>
  );
}
