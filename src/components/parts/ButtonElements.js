import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Buttons = styled.button.attrs({
  className: `bg-white shadow-md text-xs md:tracking-wider lg:text-base text-black active:bg-yellow-500 
  sm:font-extrabold font-bold px-4 md:py-3 sm:py-3 py-3 rounded  hover:shadow-sm outline-none 
  focus:outline-none hover:bg-yellow-300`,
})``;

export const SizeButton = tw(Buttons)`
  ${(p) => (p.large ? "px-4" : "px-0")}
`;
