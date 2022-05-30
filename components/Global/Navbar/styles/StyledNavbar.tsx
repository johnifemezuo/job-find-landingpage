import tw from "tailwind-styled-components/dist";

interface NavbarProps {
  $isOpen: boolean;
}

export const StyledNavbarWrapper = tw.div`
    w-full flex items-center justify-between 
    md:mt-4   
`;

export const StyledNavLinks = tw.div`

md:relative md:hidden flex items-center md:space-x-8 fixed md:block bg-white left-0 top-0  md:bg-transparent w-1/2 md:w-auto  h-screen md:h-auto z-40 p- md:p-0 grid pt-12 md:pt-0 transition-transform duration-500 

${(p: any) =>
  p.$isOpen
    ? " translate-x-0 drop-shadow-2xl"
    : "-translate-x-full md:translate-x-0"}


`;

export const StyledNavLink = tw.a`
   text-base text-textColor hover:text-primary transition-all ml-6 md:ml-0    
`;
