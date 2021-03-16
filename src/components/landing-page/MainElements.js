import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div.attrs({
  // className: `grid grid-cols-1 grid-flow-row`,
  className: `w-full`,
})``;

export const Section = styled.section.attrs({
  className: `mt-16 w-full px-12 grid gap-12 text-white place-items-center 
  md:grid-cols-2 md:gap-0 md:px-28 lg:px-32`,
})`
  & {
    img {
      ${tw`w-11/12 h-auto md:w-9/12 object-contain block box-content`}
    }
  }
`;

export const MainContent = styled.div.attrs({
  className: `lg:w-11/12 lg:pr-6`,
})`
  & {
    h1 {
      ${tw`font-semibold mb-6 text-lg md:text-xl md:mb-8
      lg:text-2xl`}
    }

    p {
      ${tw`text-sm md:text-xs lg:text-base`}
    }
  }
`;

export const SectionBottom = styled.div.attrs({
  className: `w-full flex relative items-center mt-10 0
   h-full`,
})`
  & {
    img {
      ${tw`object-fill w-full h-auto md:h-full `}
    }
  }
`;

export const BottomContent = styled.section.attrs({
  className: `absolute min-w-min w-3/5 sm:w-3/4 sm:pr-10 px-6 py-4 
  md:w-2/5 md:inset-5 md:h-auto text-white flex flex-col justify-center lg:mx-56 md:mx-36`,
})`
  & {
    h1 {
      ${tw`text-xs sm:text-sm mb-4 md:text-base lg:mb-10 lg:font-medium`}
    }
    p {
      ${tw`text-sm font-medium mb-4 sm:text-base md:text-xl
       md:font-normal lg:mb-10 lg:text-2xl md:font-bold`}
    }
  }
`;
