import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section.attrs({
  className: `overflow-x-hidden text-black w-full h-auto z-20 box-border absolute`,
})``;

export const Nav = styled.div.attrs({
  className: `container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center
     bg-transparent box-content `,
})``;

export const SocialMedia = styled.div.attrs({
  className: `float-right flex sm:mb-10 mb-6 sm:mt-12 mt-10 md:mr-20 mr-8`,
})`
  &:before {
    @media only screen and (min-width: 1025px) {
      content: "";
      display: block;
      width: 88%;
      height: 1px;
      position: absolute;
      top: 60%;
      left: 64px;
      z-index: 21;
      background-color: #b0b8bc;
    }
    @media only screen and (max-width: 768px) {
      content: "";
      display: block;
      width: 70%;
      height: 1px;
      position: absolute;
      top: 68%;
      left: 64px;
      z-index: 21;
      background-color: #b0b8bc;
    }
    @media only screen and (max-width: 1024px) {
      content: "";
      display: block;
      width: 85%;
      height: 1px;
      position: absolute;
      top: 65%;
      left: 64px;
      z-index: 21;
      background-color: #b0b8bc;
    }
    @media only screen and (max-width: 480px) {
      content: "";
      display: block;
      width: 70%;
      height: 1px;
      position: absolute;
      top: 68%;
      left: 64px;
      z-index: 21;
      background-color: #b0b8bc;
    }
  }
  & {
    img {
      ${tw`w-4 h-4 object-contain block box-content`}
    }
  }
`;
export const SocialLink = styled(Link).attrs({
  className: " mr-10 font-bold text-black hover:text-yellow-500 z-10",
})`
  & {
    &:hover {
      ${"" /* transition: all 0.2s ease-in-out; */}
    }
  }
`;

export const Social = styled.a.attrs({
  className: `sm:mr-10 mr-4 font-bold text-black hover:text-yellow-500 z-10`,
})``;

export const NavLink = styled(Link).attrs({
  className: `mr-6 sm:mr-16 font-bold text-black hover:text-yellow-500 z-10
  flex flex-col items-center sm:inline-block`,
})``;
export const NavMenu = styled.div.attrs({
  className: `md:ml-auto flex flex-wrap items-center md:mt-0 md:text-base sm:text-sm mt-4 
    text-xs justify-center `,
})``;
