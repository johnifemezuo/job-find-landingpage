import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

function HeroImg() {
  useEffect(() => {
    let tl = gsap.timeline({default: {opacity: 1}});

    
    tl.to(".mainImg", {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: "back(8)",
    });

    tl.fromTo(
      ".bounce",
      {
        y: 10,
        ease: "elastic.in(1, 2)",
        opacity: 0,
      },
      {
        y: -30,
        duration: 1.3,
        opacity: 1,
        ease: "back.inOut(4)",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <>
      <div className="mt-16 hidden  relative rounded-full lg:w-1/2 w-[400px] mx-auto h-[400px] lg:h-[630px] md:grid place-content-center heroBg px-12">
        <img
          src="/images/heroImg.png"
          alt=""
          // ref={imgs}
          className="rounded-full mainImg scale-75 opacity-0 w-[300px] md:w-[500px] h-[300px] lg:h-[500px] object-cover bg-blue-100/50 border"
        />
        <img
          src="/images/slack.png"
          alt=""
          className="bg-white bounce opacity-0 top-0 -left-12 absolute p-4 rounded-full  shadow-lg"
        />
        <img
          src="/images/figma.png"
          alt=""
          className="bg-white bounce opacity-0 -right-5 p-4 absolute rounded-full  shadow-lg"
        />
        <img
          src="/images/Google.png"
          alt=""
          className="bg-white bounce opacity-0 bottom-0 right-16 p-4 absolute rounded-full  shadow-lg"
        />
      </div>
    </>
  );
}

export default HeroImg;
