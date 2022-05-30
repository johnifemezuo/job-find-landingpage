import gsap, { Power3 } from "gsap";
import React, { useEffect } from "react";
import Container from "../../../../Layout/Container";
import BodyHeaders from "../../../Global/Elements/BodyHeaders/BodyHeaders";
import MissionIcon from "../../../Global/Icons/MissionIcon";
import QualityIcon from "../../../Global/Icons/QualityIcon";
import ValueIcon from "../../../Global/Icons/ValueIcon";
import AboutUsCard from "./AboutUsCard";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

function AboutUsSection() {
  useEffect(() => {
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "restart none none revert",
      },
      opacity: 1,
      y: -100,
      duration: 1.1,
      ease: "easeInOut",
      stagger: 0.5
    });

     
  }, []);

  return (
    <section className="relative ">
      <Container>
        <BodyHeaders anime="about" title="About Us" subTitle="who we are" />

        <div className=" lg:mt-36 mt-20 space-y-8 md:space-y-0 gap-6 grid lg:grid-cols-3">
          <AboutUsCard title="Our Value" icon={<ValueIcon />} />

          <AboutUsCard title="Our Mission" icon={<MissionIcon />} />

          <AboutUsCard title="Quality Assurance" icon={<QualityIcon />} />
        </div>
      </Container>
    </section>
  );
}

export default AboutUsSection;
