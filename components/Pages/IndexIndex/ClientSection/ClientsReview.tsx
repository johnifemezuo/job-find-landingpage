import React,{useEffect, useRef} from "react";
import BodyHeaders from "../../../Global/Elements/BodyHeaders/BodyHeaders";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ReviewCard from "./ReviewCard";
import RightIcon from "../../../Global/Icons/RightIcon";
import ArrowRight from "../../../Global/Icons/ArrowRight";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ClientsReview() {
  let clientReviewSlider = useRef(null)

  useEffect(() => {
     gsap.to(".clientHeader", {
       scrollTrigger: {
         trigger: ".clientHeader",
         toggleActions: "restart none none reverse",
         start: "20px 90%",
       },
       opacity: 1,
       duration: 1.5,
       ease: "easeIn",
       y: -80
     });
    
      gsap.to(".clientSlider", {
        scrollTrigger: {
          trigger: ".clientSlider",
          toggleActions: "restart restart none reverse",
          start: "20px 90%",
        },
        opacity: 1,
        duration: 1.5,
        ease: "easeIn",
        x: 0,
      });

      gsap.fromTo(
      clientReviewSlider.current,
      { x: -300, duration: 1.4, opacity: 0 },
      {
        x: 0,
        duration: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: clientReviewSlider.current,
          toggleActions: "play none none reverse",
          start: "20px 90%",
        },
      }
    );


    
  }, [])

  
  return (
    <div className="mt-44">
      <div
        // style={{ maxWidth: "", margin: "0 auto" }}
        className="relative mx-auto lg:px-8  w-auto lg:max-w-[1800px]"
      >
        <div className="lg:pt-28">
          <BodyHeaders
            anime="clientHeader"
            title="Clients Say about us"
            subTitle="Client say"
            desc="Let`s know what our client say"
          />

          <div className=" overflow-hidden ">
            {/* slider */}
            <Splide
              className="w-[1200px] md:w-auto overflow-hidden"
              tag="section"
              options={{
                rewind: true,
                gap: "1rem",
                arrows: true,
              }}
              hasTrack={false}
              data-splide='{"type":"loop","perPage":4}'
              aria-labelledby="My Favorite Images"
            >
              <div
                className="custom-wrapper 
               py-12"
                ref={clientReviewSlider}
              >
                <SplideTrack>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                  <SplideSlide>
                    <ReviewCard />
                  </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows pt-6 hidden absolute -top-5 right-0 lg:flex items-center space-x-8  justify-between  ">
                  <span className="text-zinc-300 transition-color border-primary hover:text-primary duration-300 rounded-full flex splide__arrow--prev">
                    <ArrowRight />
                  </span>

                  <span className=" transition-color duration-300 hover:text-primary rounded-full flex splide__arrow--next text-zinc-300">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </Splide>

            {/* ---- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsReview;
