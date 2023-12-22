import * as React from "react";
import Icon from "src/common/Icon/Icon";
import Navigation from "../Navigation/Navigation";
import "./MobileMenu.scss";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return isOpen ? (
    <div className="backdrop">
      <button type="button" onClick={toggleMenu} className="button">
        <Icon icon="close" />
      </button>
      <Navigation menuCollapsed={false} />
    </div>
  ) : (
    <button type="button" className="button" onClick={toggleMenu}>
      <Icon icon="butgerMenu" />
    </button>
  );
}
