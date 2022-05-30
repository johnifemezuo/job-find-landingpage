import React from "react";

function CandidateCard({ img, name, title, salary }: any) {
  return (
    <div className="lg:ml-6">
      <div className="relative border border-primary lg:w-[350px] rounded-xl shadow-xl bg-white  p-2 md:p-4">
        <img
          src={img}
          alt="men"
          className=" overflow-hidden rounded-xl w-[250px] h-[260px] lg:h-[320px] lg:w-[370px]   inline-block   object-cover"
        />
      </div>
      <div className="text-center mt-6">
        <h3 className="font-medium text-textColor text-lg">{name}</h3>
        <p className="text-zinc-500">{title}</p>
        <p className="text-zinc-500">{salary}</p>
      </div>
    </div>
  );
}

export default CandidateCard;
