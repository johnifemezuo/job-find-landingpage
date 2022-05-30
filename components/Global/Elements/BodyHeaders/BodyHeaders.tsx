import React from "react";

function BodyHeaders({ title, subTitle, desc, anime }: any) {
  return (
    <div className={`${anime} text-center space-y-4 mb-7 `}>
      <h4 className="text-primary  text-sm mg:text-base uppercase font-semibold">
        {subTitle}
      </h4>
      <h1 className="text-3xl md:text-5xl capitalize lg:text-5xl font-medium">
        {title}
      </h1>

      <p className="max-w-xl px-4 lg:px-0 mx-auto text-zinc-500 lg:text-lg">
        {desc}
      </p>
    </div>
  );
}

export default BodyHeaders;
