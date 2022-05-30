import gsap, { Power3 } from 'gsap';
import React,{useEffect} from 'react'
import Container from '../../../../Layout/Container';
import BodyHeaders from '../../../Global/Elements/BodyHeaders/BodyHeaders';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ServiceSection() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".services", {
      scrollTrigger: {
        trigger: ".services",
        toggleActions: "restart restart none reverse",
        start: '40px 80%'
      },
      opacity: 1,
      y: -80,
      duration: 1.5,
      stagger: 0.5,
      ease: "easeIn",
      
    });
  }, []);

  return (
    <section className="mt-44">
      <Container>
        <BodyHeaders
          title="Service We provide"
          subTitle="WHAT WE OFFER"
          desc="To now more about us and our services you can join us. And we ensure you will get a proper fitness facility."
        />

        <div className="grid lg:grid-cols-3 my-36 gap-6 opacity-0 services">
          <div className="rounded-2xl mt-8 cursor-pointer  transition-colors duration-400 text-center group bg-white hover:bg-primary  border shadow-xl space-y-5 p-12">
            <span className="p-6 inline-block rounded-full bg-[#FED5D9]">
              <img
                src="/images/Work From Home.png"
                alt="job"
                className="h-12"
              />
            </span>

            <h2 className="text-xl font-semibold group-hover:text-white">
              Advertise jobs on video
            </h2>
            <p className="text-zinc-500 group-hover:text-white">
              There are many variations of the passages lorem ipsum available,
              but the major have suffered alteration
            </p>
          </div>

          <div className="rounded-2xl mt-8 cursor-pointer  transition-colors duration-400 text-center group bg-white hover:bg-primary  border shadow-xl space-y-5 p-12">
            <span className="p-6 inline-block rounded-full bg-[#fff] border">
              <img src="/images/Job Portfolio.png" alt="job" className="h-12" />
            </span>

            <h2 className="text-xl font-semibold group-hover:text-white">
              Create your video resume
            </h2>
            <p className="text-zinc-500 group-hover:text-white">
              There are many variations of the passages lorem ipsum available,
              but the major have suffered alteration
            </p>
          </div>

          <div className="rounded-2xl mt-8 cursor-pointer  transition-colors duration-400 text-center group bg-white hover:bg-primary  border shadow-xl space-y-5 p-12">
            <span className="p-6 inline-block rounded-full bg-[#DDF0FE]">
              <img src="/images/Candidates.png" alt="job" className="h-12" />
            </span>

            <h2 className="text-xl font-semibold group-hover:text-white">
              Find you best candidates
            </h2>
            <p className="text-zinc-500 group-hover:text-white">
              There are many variations of the passages lorem ipsum available,
              but the major have suffered alteration
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServiceSection