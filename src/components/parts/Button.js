import React from "react";
import { Link } from "react-router-dom";
import { SizeButton } from "./ButtonElements";

export const Button = ({ children, onClick, large }) => {
  return (
    <Link to="/" className="btn-mobile">
      <SizeButton large={large} onClick={onClick}>
        {children}
      </SizeButton>
    </Link>
  );
};
