import * as React from "react";
import SideMenu from "../SideMenu/SideMenu";

type LayoutProps = {
  children: React.JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SideMenu />
      {children}
    </div>
  );
}
