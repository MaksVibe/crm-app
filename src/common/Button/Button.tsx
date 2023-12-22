import * as React from "react";
import "./Button.scss";

type ButtonProps = {
  id?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  activePage?: number;
  isDisabled?: boolean;
};

export default function Button({
  activePage,
  id,
  onClick,
  children,
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      id={id?.toString()}
      type="button"
      onClick={onClick}
      className={`btn ${id && activePage === id ? "active" : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
