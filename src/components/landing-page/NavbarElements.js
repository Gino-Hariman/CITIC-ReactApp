import styled from "styled-components";
import tw from "twin.macro";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav.attrs({
  className: `container  mx-auto flex justify-between items-center h-16 text-white 
  bg-transparent font-sans relative z-10 fixed`,
})``;

export const NavLogo = styled(Link).attrs({
  className: "pl-4 font-bold text-3xl",
})``;

export const HamburgerMenu = styled.div.attrs({
  className: "px-4 cursor-pointer md:hidden",
})``;

export const NavMenu = styled.nav.attrs({
  className: " pr-8 md:block hidden",
})``;

export const NavLink = styled(Link).attrs({
  className: "p-4 mr-6",
})``;
