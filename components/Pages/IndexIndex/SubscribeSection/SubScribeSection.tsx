import gsap from "gsap";
import React, { useEffect } from "react";
import Container from "../../../../Layout/Container";
import BodyHeaders from "../../../Global/Elements/BodyHeaders/BodyHeaders";
import EmailIcon from "../../../Global/Icons/EmailIcon";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function SubScribeSection() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".subscribe", {
      scrollTrigger: {
        trigger: ".subscribe",
        toggleActions: "restart none none reverse",
        start: "top center ",
      },
      y: -50,
      duration: 1.5,
      ease: "easeIn",
      stagger: 0.4
    });
  }, []);
  
  return (
    <div className="mt-44">
      <div className="bg-[#F5FAFE] rounded-3xl m-6 lg:m-20  py-12 md:py-36">
        <Container>
          <div className="flex-col-reverse lg:flex-row flex items-center space-y-12 lg:space-x-20">
            <img
              src="/images/man.jpg"
              alt="man"
              className="lg:w-2/5 rounded-b-full subscribe rounded-tl-full mt-20 lg:mt-0 h-[340px] lg:h-[450px] object-cover"
            />

            <div className="subscribe">
              <div className="mb-6 space-y-4  text-center lg:text-left lgw-[400px] xl:w-[600px] ">
                <h1 className="text-4xl md:text-5xl capitalize lg:text-5xl font-medium">
                  Get in Touch With Us
                </h1>

                <p className=" mx-auto text-zinc-500 lg:text-lg">
                  To know more about us and our service,you can Join us.
                </p>
              </div>

              <div className="xl:flex items-center  space-y-12 text-center lg:text-left  lg:space-y-0 xl:space-x-6">
                <div className="w-full lg:mb-6 xl:mb-0 rounded-lg shadow-xl  flex items-center space-x-4 bg-white p-5">
                  <span className="text-[#FA4D11]">
                    <EmailIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="xl:mt-0 lg:mt-12 py-5 px-6 text-center  font-medium transition-all hover:bg-[#ed3f05] bg-[#FA4D11] lg:w-[200px] text-white rounded-lg"
                >
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default SubScribeSection;
