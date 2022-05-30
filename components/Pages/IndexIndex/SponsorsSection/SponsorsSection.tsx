import gsap, { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";
import Container from "../../../../Layout/Container";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SponsorsSection() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sponsors", {
      scrollTrigger: {
        trigger: ".sponsors",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      y: -70,
      duration: 1.3,
      stagger: 0.4,
      ease: "back(5)",
    });
  }, []);

  return (
    <div className="lg:mt-0 mt-[300px]  py-12 my-20">
      <Container>
        <div className=" mb-36 grid grid-cols-2  md:grid-cols-3 gap-6 lg:grid-cols-5">
          <a href="/" title="Airbnb">
            <img src="/images/img1.png" alt="imgs" className="opacity-0 sponsors" />
          </a>
          <a href="/" title="Microsoft">
            <img src="/images/img2.png" alt="imgs" className="opacity-0 sponsors" />
          </a>
          <a href="/" title="Walmart">
            <img src="/images/img3.png" alt="imgs" className="opacity-0 sponsors" />
          </a>
          <a href="/" title="FedEx">
            <img src="/images/img4.png" alt="imgs" className="opacity-0 sponsors" />
          </a>
          <a href="/" title="Alphabet">
            <img src="/images/img5.png" alt="imgs" className="opacity-0 sponsors" />
          </a>
        </div>
      </Container>
    </div>
  );
  
}

export default SponsorsSection;
