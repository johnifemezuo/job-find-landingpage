import React from 'react'

function AboutUsCard({ title, icon }: any) {
  return (
    <>
      <div className="space-y-5 about block px-8 text-center ">
        <span className="bg-primary inline-block rounded-full text-white p-8">
          {icon}
        </span>
        <h4 className="text-lg md:text-xl font-semibold text-textColor">
          {title}
        </h4>
        <p className="text-zinc-500 lg:lg ">
          Quality and timely services for the substainable solution outmated and
          specific method
        </p>
      </div>
    </>
  );
}

export default AboutUsCard