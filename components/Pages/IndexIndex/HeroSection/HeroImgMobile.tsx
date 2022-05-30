import React from 'react'

function HeroImgMobile() {
  return (
    <>
      <div className="relative grid py-6 mt-20 md:hidden">
        <div className="mt-16    rounded-full lg:w-1/2 w-[330px] mx-auto h-[330px] lg:h-[630px] grid place-content-center heroBg px-12">
          <img
            src="/images/heroImg.png"
            alt=""
            className="rounded-full w-[300px] h-[250px]  object-cover bg-blue-100/50 border"
          />
          <img
            src="/images/slack.png"
            alt=""
            className="bg-white top-0 -left-4 absolute p-4 rounded-full w-16 shadow-lg"
          />
          <img
            src="/images/figma.png"
            alt=""
            className="bg-white -right-5 p-4 absolute rounded-full w-16 shadow-lg"
          />
          <img
            src="/images/Google.png"
            alt=""
            className="bg-white bottom-0 right-16 p-4 absolute rounded-full w-16 shadow-lg"
          />
        </div>

        <div className="h-full z-[-1] absolute top-0 right-0 bgGradient w-[50%]"></div>
      </div>
    </>
  );
}

export default HeroImgMobile