import React from "react";
import {
  Nav,
  NavLogo,
  HamburgerMenu,
  NavMenu,
  NavLink,
} from "./NavbarElements";


export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/" role="navigation">
          CITIC
        </NavLogo>
        <HamburgerMenu>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </HamburgerMenu>
        <NavMenu>
          <NavLink to="/tentang-citic">Tentang CITIC</NavLink>
          <NavLink to="/fitur-citic">Fitur CITIC</NavLink>
          <NavLink to="/kontak-citic">Kontak CITIC</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
