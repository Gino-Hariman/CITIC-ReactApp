import styled from "styled-components";
import { Link } from "react-router-dom";
import tw from "twin.macro";

export const Container = styled.div.attrs({
  className: `bg-black w-full min-h-screen max-h-sreen absolute
  top-0 z-0`,
})`
  & {
    img {
      ${tw`h-96 block
      lg:w-screen lg:h-auto lg:w-10/12 md:w-11/12 md:h-auto`}
    }
  }
`;

export const Section = styled.div.attrs({
  className: `h-auto text-white font-sans w-64 absolute top-28 left-4 select-none pr-2
  xl:top-40 xl:left-36 xl:h-3/5 xl:w-5/12 
  lg:top-36 lg:left-32 lg:h-3/5 lg:w-5/12 
  md:w-96 md:left-16 
  sm:left-20 sm:w-80`,
})`
  & {
    h1 {
      ${tw`font-medium relative text-xs mb-6 md:text-base sm:text-sm`}
    }
    h1:after {
      @media only screen and (min-width: 1025px) {
        content: "";
        display: block;
        width: 20%;
        height: 2px;
        position: absolute;
        right: 20%;
        top: 50%;
        background-color: white;
      }

      @media only screen and (min-width: 1200px) {
        content: "";
        display: block;
        width: 33%;
        height: 2px;
        position: absolute;
        right: 15%;
        top: 50%;
        background-color: white;
      }

      @media only screen and (max-width: 1024px) {
        content: "";
        display: block;
        width: 14%;
        height: 2px;
        position: absolute;
        right: 10%;
        top: 50%;
        background-color: white;
      }
    }
    p {
      ${tw`font-medium mb-6 leading-snug text-base
      xl:pr-20
      xl:font-bold xl:text-2xl xl:leading-relaxed 
      lg:font-semibold lg:text-xl lg:tracking-wide lg:leading-relaxed lg:pr-12 lg:whitespace-normal
      md:text-lg md:pr-6
      sm:text-lg`}
    }
    Button {
      ${tw`xl:mt-6 md:mt-1 mt-0`}
    }
  }
`;

export const HeroArrow = styled.section.attrs({
  className: `mt-5 relative flex flex-col items-center text-white `,
})`
  & {
    h1 {
      ${tw`font-semibold text-xl`}
    }
  }
`;

export const LinkImage = styled(Link).attrs({})`
  img {
    ${tw`block w-10 h-10 md:w-12 md:h-12`}
  }
`;
