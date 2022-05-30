import gsap from "gsap";
import { useAtom } from "jotai";
import React,{useEffect} from "react";
import { openHomeVideo } from "../../../../base/atom/useAtom";
import Container from "../../../../Layout/Container";
import BodyHeaders from "../../../Global/Elements/BodyHeaders/BodyHeaders";
import CameraIcon from "../../../Global/Icons/CameraIcon";
import FileIcon from "../../../Global/Icons/FileIcon";
import GiftIcon from "../../../Global/Icons/GiftIcon";
import PlayIcon from "../../../Global/Icons/PlayIcon";
import ResumeModal from "./ResumeModal";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ResumeSection() {
  const [play,setPlay] = useAtom(openHomeVideo)

  const openVideo: any = () : void => (
    setPlay(true)
  )


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".resumeHeader", {
      scrollTrigger: {
        trigger: ".resumeHeader",
        // toggleActions: "restart restart none pause",
        start: "top center",
      },
      opacity: 1,
      y: -50,
      duration: 1.5,
      ease: "easeIn",
    });

    gsap.to(".resumeVideo", {
      scrollTrigger: {
        trigger: ".resumeVideo",
        toggleActions: "restart restart none reverse",
        start: "20px 90%"
      },
      opacity: 1,
      duration: 1.5,
      ease: "easeIn",
    });

    gsap.to(".resumtTutorial", {
      scrollTrigger: {
        trigger: ".resumtTutorial",
        toggleActions: "restart restart none reverse",
        start: "20px 80%",
      },
      opacity: 1,
      x: -20,
      duration: 1.5,
      ease: "easeIn",
    });

    let tl = gsap.timeline({default: {opacity: 1}});

    


    tl.fromTo(
      ".resumeBounce",
      {
        y: 10,
        ease: "elastic.in(1, 2)",
        opacity: 0,
      },
      {
        y: -20,
        duration: 1.3,
        opacity: 1,
        ease: "back.inOut(4)",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      }
    );


  }, []);
  
  return (
    <section className="mt-44 relative">
      <Container>
        <BodyHeaders
          anime="resumeHeader"
          title="How To Make A Video Resume"
          subTitle="how to do"
        />

        <div className="lg:flex z-20 relative items-center lg:space-x-12 mt-12">
          <div className="relative resumeVideo opacity-0">
            <div className="rounded-lg overflow-hidden relative">
              <img src="/images/windowsimg.jpg" alt="" />
              <div className="bg-black/40 grid place-content-center absolute top-0 right-0 left-0 bottom-0">
                <span
                  onClick={openVideo}
                  className="text-white/70 cursor-pointer hover:text-primary/80 "
                >
                  <PlayIcon />
                </span>
              </div>
            </div>

            <div className="bg-white resumeBounce px-5 py-6 shadow-xl rounded-xl text-textColor text-sm md:text-lg  font-medium absolute -bottom-12 -right-8 flex items-center space-x-2">
              <span className="text-primary">
                <CameraIcon />
              </span>
              <span>Video Resume</span>
            </div>
            <div className="bg-white resumeBounce px-5 py-8 shadow-xl rounded-xl text-textColor text-sm md:text-lg  font-medium absolute -top-12 -left-8  grid place-content-center  space-y-3">
              <span className="text-primary">
                <GiftIcon />
              </span>
              <span>Get Job</span>
            </div>
            <div className="bg-primary resumeBounce px-5 py-4 shadow-xl rounded-xl text-textColor text-sm md:text-l font-medium absolute -bottom-12 -left-8 flex items-center space-x-2">
              <span className="text-white">
                <FileIcon />
              </span>
              <span className="text-white">Upload CV</span>
            </div>
          </div>

          <div className="lg:pl-12 space-y-12 mt-20 lg:resumtTutorial relative lg:translate-x-20">
            <h3 className="text-2xl md:text-4xl font-light text-textColor ">
              Make your own resume vdeo resume in 3 easy steps.
            </h3>
            <div className="space-y-4">
              <h5 className="text-primary">Step 1</h5>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-600 ">
                Pick a video resume template
              </h2>
              <p className="text-zinc-400">
                Upload you video, just drap and drop. you can even include
                images of your typed resume to refer to, in the video.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-primary">Step 1</h5>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-600 ">
                Pick a video resume template
              </h2>
              <p className="text-zinc-400">
                Upload you video, just drap and drop. you can even include
                images of your typed resume to refer to, in the video.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-primary">Step 1</h5>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-600 ">
                Pick a video resume template
              </h2>
              <p className="text-zinc-400">
                Upload you video, just drap and drop. you can even include
                images of your typed resume to refer to, in the video.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <img
        src="/images/videolayer.png"
        alt="layer"
        className="absolute top-40 z-10  left-0"
      />
      <ResumeModal />
    </section>
  );
}

export default ResumeSection;
