import * as React from "react";
import { ReactComponent as ArrowIcon } from "./icons/arrow-icon.svg";
import { ReactComponent as CustomersIcon } from "./icons/customers-icon-min.svg";
import { ReactComponent as DashboardIcon } from "./icons/dashboard-icon-min.svg";
import { ReactComponent as HelpIcon } from "./icons/help-icon-min.svg";
import { ReactComponent as IncomeIcon } from "./icons/income-icon-min.svg";
import { ReactComponent as PaginationArrowIcon } from "./icons/pag-arrow-icon.svg";
import { ReactComponent as ProductIcon } from "./icons/product-icon-min.svg";
import { ReactComponent as PromoteIcon } from "./icons/promote-icon-min.svg";
import { ReactComponent as CloseIcon } from "./icons/close-icon.svg";
import { ReactComponent as BurgerMenuIcon } from "./icons/burger-menu-icon.svg";
import "./Icon.scss";

const sprite = {
  arrow: <ArrowIcon />,
  dashboard: <DashboardIcon />,
  customers: <CustomersIcon />,
  help: <HelpIcon />,
  income: <IncomeIcon />,
  pagArrow: <PaginationArrowIcon />,
  product: <ProductIcon />,
  promote: <PromoteIcon />,
  close: <CloseIcon />,
  butgerMenu: <BurgerMenuIcon />,
};

interface Props extends React.SVGAttributes<SVGElement> {
  icon: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function Icon({
  icon,
  className,
  width,
  height,
  onClick,
}: Props) {
  return (
    <div
      className={`icon-wrapper${className ? " " + className : ""} ${
        icon === "pagArrow" ? " padding" : ""
      }`}
      style={{ width, height }}
      onClick={onClick}
    >
      {sprite[icon]}
    </div>
  );
}
