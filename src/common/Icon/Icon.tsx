import * as React from "react";
import { ReactComponent as ArrowIcon } from "./icons/arrow-icon.svg";
import { ReactComponent as CustomersIcon } from "./icons/customers-icon-min.svg";
import { ReactComponent as DashboardIcon } from "./icons/dashboard-icon-min.svg";
import { ReactComponent as HelpIcon } from "./icons/help-icon-min.svg";
import { ReactComponent as IncomeIcon } from "./icons/income-icon-min.svg";
import { ReactComponent as ProductIcon } from "./icons/product-icon-min.svg";
import { ReactComponent as PromoteIcon } from "./icons/promote-icon-min.svg";

const sprite = {
  arrow: <ArrowIcon />,
  dashboard: <DashboardIcon />,
  customers: <CustomersIcon />,
  help: <HelpIcon />,
  income: <IncomeIcon />,
  product: <ProductIcon />,
  promote: <PromoteIcon />,
};

interface Props extends React.SVGAttributes<SVGElement> {
  icon: string;
  className?: string;
  width: number;
  height: number;
}

export default function Icon({ icon, className, width, height }: Props) {
  return (
    <div className={className} style={{ width, height }}>
      {sprite[icon]}
    </div>
  );
}
