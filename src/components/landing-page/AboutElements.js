import styled from "styled-components";
import tw from "twin.macro";
// import tw from "tailwind-styled-components";

export const Container = styled.div.attrs({
  className: `grid place-items-center grid-cols-1 mt-10 relative`,
})`
  & {
    img {
      ${tw`h-64 min-h-0 md:h-full w-full`}
    }
  }
`;

// pake tailwind-styled-components
// export const Container = tw.div`
//   grid place-items-center grid-cols-1 mt-10 relative bg-green-200
// `;

// export const ContainerImage = tw.img`
//   h-64 min-h-0 md:h-full w-screen block bg-red-200
// `;

export const Section = styled.div.attrs({
  className: `px-6 absolute w-full place-items-center gap-6 md:container lg:pb-0 md:h-full md:pb-4 grid grid-cols-3 md:grid-cols-4 md:gap-0`,
})`
  & {
    img {
      ${tw`object-contain py-8 sm:py-0 sm:h-full sm:w-full lg:w-7/12 xl:h-96 lg:h-80 md:col-span-2 md:w-1/2 md:h-56`}
    }
  }
`;

export const Content = styled.section.attrs({
  className: `text-black pr-6 xl:pr-28 2xl:pr-52 md:pr-0 sm:pr-12 font-sans h-full col-span-2 md:col-span-2 md:w-full flex flex-col justify-center`,
})`
  & {
    h1 {
      ${tw`font-bold sm:text-sm text-xs pb-4 tracking-tight xl:mb-6 lg:mb-3 lg:text-2xl md:text-lg xl:text-3xl`}
    }
    ,
    p {
      ${tw`text-xs sm:leading-relaxed leading-4 lg:text-base lg:tracking-wide lg:leading-loose`}
    }
  }
`;

export const Bottom = styled.div.attrs({
  className: `w-full h-12 relative flex items-center 
  justify-center bg-orange md:h-20`,
})`
  & {
    h1 {
      ${tw`text-white text-lg font-semibold md:font-bold 
      tracking-wider md:text-2xl`}
    }
  }
`;
