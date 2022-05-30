import React, { useEffect, useRef, useState } from "react";
import Container from "../../../../Layout/Container";
import DropdownIcon from "../../../Global/Icons/DropdownIcon";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RightIcon from "../../../Global/Icons/RightIcon";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
function FaqSection() {

  let faqSlider = useRef(null);

  useEffect(() => {

      gsap.fromTo(
      faqSlider.current,
      { x: 0, duration: 1.4, opacity: 0 },
      {
        x: -170,
        duration: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: faqSlider.current,
          toggleActions: "play none none reverse",
          start: "20px 90%",
        },
      }
    );

    
  }, [])

  return (
    <div className="mt-44">
      <Container>
        <div className="flex-col-reverse lg:flex-row flex items-center space-y-12 lg:space-x-20">
          <img
            src="/images/female.jpg"
            alt="man"
            className="lg:w-1/2 rounded-b-full rounded-tl-full mt-20 lg:mt-0 h-[340px] lg:h-[450px] object-cover"
          />

          <div className="">
            <div className="mb-6 space-y-4  text-center lg:text-left lgw-[400px] xl:w-[600px] ">
              <h4 className="text-primary  text-sm mg:text-base uppercase font-semibold">
                know your answer
              </h4>
              <h1 className="text-4xl md:text-5xl capitalize lg:text-5xl font-medium">
                FAQ
              </h1>
            </div>

            {/* slider */}

            <Splide
              tag="section"
              options={{
                rewind: true,
                gap: "1rem",
                arrows: true,
              }}
              hasTrack={false}
              aria-labelledby="My Favorite Images"
            >
              <div className="custom-wrapper py-12" ref={faqSlider}>
                <SplideTrack>
                  <SplideSlide className="lg:translate-x-44 ">
                    <div className="mt-12 space-y-4">
                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck1"
                        />
                        <label
                          htmlFor="chck1"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How long is the site live?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck2"
                        />
                        <label
                          htmlFor="chck2"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How can i make my resume throght this website?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck3"
                        />
                        <label
                          htmlFor="chck3"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How can i find my dream job here?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck4"
                        />
                        <label
                          htmlFor="chck4"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            what you are providing extra that can help to find a
                            job?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck5"
                        />
                        <label
                          htmlFor="chck5"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How long it will take to get a permanent job?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="mt-12 space-y-4">
                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck6"
                        />
                        <label
                          htmlFor="chck6"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How long is the site live?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck7"
                        />
                        <label
                          htmlFor="chck7"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How can i make my resume throght this website?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck8"
                        />
                        <label
                          htmlFor="chck8"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How can i find my dream job here?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck9"
                        />
                        <label
                          htmlFor="chck9"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            what you are providing extra that can help to find a
                            job?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>

                      <div className="border-b overflow-hidden pb-3">
                        <input
                          className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                          type="checkbox"
                          id="chck10"
                        />
                        <label
                          htmlFor="chck10"
                          // onClick={() => setOpenInfo(!openInfo)}
                          className="flex--between block py-2  tab-label cursor-pointer group"
                        >
                          <h2 className="text-xl group-hover:text-primary">
                            How long it will take to get a permanent job?
                          </h2>
                          <span className="transition-color text-primary test rounded-full flex items-center justify-center">
                            <DropdownIcon />
                          </span>
                        </label>

                        <div className={`tab-content `}>
                          <p className="py-2 text-zinc-500">
                            This is super easy to make your first resume or cv
                            by using our website so fast and safely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                </SplideTrack>

                <div className="flex items-center absolute -bottom-35 mt-6 space-x-4 right-0 4">
                  <span className="font-medium text-textColor text-lg">
                    Show others
                  </span>
                  <div className="splide__arrows flex items-center space-x-6 ">
                    <span className="border bg-white hover:bg-primary hover:text-white transition-color border-primary text-primary duration-300 rounded-full flex items-center p-4 splide__arrow--prev">
                      <RightIcon />
                    </span>

                    <span className="border bg-white hover:bg-primary border-primary transition-color duration-300 hover:text-white rounded-full flex items-center p-4 splide__arrow--next text-primary">
                      <RightIcon />
                    </span>
                  </div>
                </div>
              </div>
            </Splide>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FaqSection;
