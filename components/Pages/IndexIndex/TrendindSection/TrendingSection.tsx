import gsap from "gsap";
import React,{useEffect} from "react";
import Container from "../../../../Layout/Container";
import BodyHeaders from "../../../Global/Elements/BodyHeaders/BodyHeaders";
import TrendingCard from "./TrendingCard";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function TrendingSection() {

   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".trending", {
      scrollTrigger: {
        trigger: ".trending",
        toggleActions: "restart none none reverse",
        start: 'top center '
      },
      opacity: 1,
      y: -100,
      duration: 1.5,
      ease: "easeIn",
      
    });
   }, []);
  
  return (
    <section className="mt-56">
      <BodyHeaders
        anime="trending"
        title="Trending Categories"
        subTitle="TRENDING CATEGORIES"
        color="bg-[#EDFFE5]"
        desc="NOW! Get your dream job according to your skill across the globe."
      />

      <Container>
        <div className="grid grid-cols-2 trending opacity-0 lg:grid-cols-4 mt-20 gap-6">
          <TrendingCard
            img={
              <img
                src="/images/Candidates55.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Construction"
            color="bg-[#EDFFE5]"
            desc="Available job:5"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-1.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Automotive"
            color="bg-[#E6F9FF]"
            desc="Available job:10"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-2.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Sales & Marketing"
            color="bg-[#EDFFE5]"
            desc="Available job:3"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-3.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Accounting"
            color="bg-[#FFE4E9]"
            desc="Available job:6"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-4.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Accounting"
            color="bg-[#FFE4E9]"
            desc="Available job:6"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-5.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Accounting"
            color="bg-[#E6F9FF]"
            desc="Available job:6"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-6.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Accounting"
            color="bg-[#F0F0F2]"
            desc="Available job:6"
          />

          <TrendingCard
            img={
              <img
                src="/images/Candidates-7.png"
                alt="job"
                className="h-8 md:h-12"
              />
            }
            title="Accounting"
            color="bg-[#EDFFE5]"
            desc="Available job:6"
          />
        </div>
      </Container>
    </section>
  );
}

export default TrendingSection;
