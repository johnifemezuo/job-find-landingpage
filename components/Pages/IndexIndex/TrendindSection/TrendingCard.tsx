import React from 'react'

function TrendingCard({img, title, desc, color}: any) {
  return (
    <>
      <div
        className={`rounded-2xl cursor-pointer transition-colors duration-400  text-center group bg-white hover:bg-primary   shadow-none border  space-y-3 p-8`}
      >
        <span className={`p-4 md:p-6  inline-block rounded-full ${color}`}>
          {img}
        </span>

        <h2 className=" md:text-xl font-semibold group-hover:text-white">
          {title}
        </h2>
        <p className="text-zinc-500 group-hover:text-white">{desc}</p>
      </div>
    </>
  );
}

export default TrendingCard