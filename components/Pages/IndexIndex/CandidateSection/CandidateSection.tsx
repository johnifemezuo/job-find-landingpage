import React, { useEffect } from "react";
import Container from "../../../../Layout/Container";
import BodyHeaders from "../../../Global/Elements/BodyHeaders/BodyHeaders";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import RightIcon from "../../../Global/Icons/RightIcon";
import CandidateCard from "./CandidateCard";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
function CandidateSection() {

  useEffect(() => {
     gsap.to(".candidateHeader", {
       scrollTrigger: {
         trigger: ".candidateHeader",
         toggleActions: "restart none none reverse",
         start: "20px 90%",
       },
       opacity: 1,
       duration: 1.5,
       ease: "easeIn",
       y: -80
     });
    
      gsap.to(".candidates", {
        scrollTrigger: {
          trigger: ".candidates",
          toggleActions: "restart restart none reverse",
          start: "20px 90%",
        },
        opacity: 1,
        duration: 1.5,
        ease: "easeIn",
        x: 0,
      });
    
  }, [])
  return (
    <div className="mt-44">
      <div
        // style={{ maxWidth: "", margin: "0 auto" }}
        className="relative mx-auto lg:px-8 w-auto lg:max-w-[1300px]"
      >
        <div>
          <BodyHeaders
            anime="candidateHeader"
            title="Our best candidate"
            subTitle="our best candidate"
            desc="Creative people fueled aith passion"
          />

          <div className="my-20 overflow-hidden">
            {/* slider */}

            <Splide
              className="w-[800px] md:w-auto overflow-hidden"
              tag="section"
              options={{
                rewind: true,
                gap: "1rem",
                arrows: true,
              }}
              hasTrack={false}
              data-splide='{"type":"loop","perPage":3}'
              aria-labelledby="My Favorite Images"
            >
              <div
                className="custom-wrapper 
               py-12"
              >
                <div className="splide__progress">
                  <div className="splide__progress__bar bg-red-300" />
                </div>

                <SplideTrack className="lg:translate-x-44 candidates">
                  <SplideSlide>
                    <CandidateCard
                      img="/images/male3.jpg"
                      name="Kathleen Moreno"
                      title="Product Designer"
                      salary="$1200 /Monthly"
                    />
                  </SplideSlide>

                  <SplideSlide>
                    <CandidateCard
                      img="/images/fe1.jpg"
                      name="Kathleen Moreno"
                      title="Product Designer"
                      salary="$1200 /Monthly"
                    />
                  </SplideSlide>

                  <SplideSlide>
                    <CandidateCard
                      img="/images/male2.jpg"
                      name="Kathleen Moreno"
                      title="Product Designer"
                      salary="$1200 /Monthly"
                    />
                  </SplideSlide>

                  <SplideSlide>
                    <CandidateCard
                      img="/images/fe2.jpg"
                      name="Kathleen Moreno"
                      title="Product Designer"
                      salary="$1200 /Monthly"
                    />
                  </SplideSlide>

                  <SplideSlide>
                    <CandidateCard
                      img="/images/male4.jpg"
                      name="Kathleen Moreno"
                      title="Product Designer"
                      salary="$1200 /Monthly"
                    />
                  </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows hidden lg:flex items-center justify-between  ">
                  <span className="border bg-white hover:bg-primary hover:text-white transition-color border-primary text-primary duration-300 rounded-full flex items-center p-4 splide__arrow--prev">
                    <RightIcon />
                  </span>

                  <span className="border bg-white hover:bg-primary border-primary transition-color duration-300 hover:text-white rounded-full flex items-center p-4 splide__arrow--next text-primary">
                    <RightIcon />
                  </span>
                </div>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSection;
