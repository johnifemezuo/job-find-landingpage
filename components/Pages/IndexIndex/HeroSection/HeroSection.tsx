import Link from "next/link";
import React from "react";
import Container from "../../../../Layout/Container";
import HeroImg from "./HeroImg";
import HeroImgMobile from "./HeroImgMobile";
import HeroText from "./HeroText";

function HeroSection() {
  
  return (
    <section className=" h-screen  w-full">
      <Container>
        <div className="block lg:flex mt-56 lg:mt-36 w-full items-center justify-between">
          <HeroText />
          <HeroImg />
        </div>
      </Container>
      <div className="h-screen hidden lg:block z-[-1] xl:w-[34vw] absolute top-0 right-0 bgGradient w-[35vw]"></div>

      <HeroImgMobile />
    </section>
  );
}

export default HeroSection;
