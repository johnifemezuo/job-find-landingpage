import React, { useRef, useEffect } from "react";
import SearchInput from "../../../Global/UI/Form/Search/SearchInput";
import { gsap, Power3 } from "gsap";

function HeroText() {
  // let el = useRef(null)
  // let h1 = gsap.utils.selector(el);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".h1,.input, .p", {
      y: -50,
      opacity: 1,
      ease: Power3.easeInOut,
      duration: 1.5,
      stagger: 0.3,
    })

  }, []);

  return (
    <div className="w-full mt-12 pare lg:px-0 lg:w-1/2">
      <div className=" mt-22  lg:px-0 text-center lg:text-left mb-6 lg:mb-24 w-full lg:w-[500px]">
        <h1 className="text-5xl h1 md:text-6xl opacity-0 lg:text-7xl text-textColor  font-bold">
          Find your dream jobs with us easily
        </h1>
        <p className="lg:max-w-3xl p boxx mt-8 opacity-0 text-zinc-500 leading-snug">
          A better way to find and hire professionals candidates for your job.
          Don`t waste your time anywhere else and stop wearing your time.
        </p>
      </div>

      <SearchInput  />
    </div>
  );
}

export default HeroText;
