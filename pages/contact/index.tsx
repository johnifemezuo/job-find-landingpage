import Head from "next/head";
import React from "react";
import BodyHeaders from "../../components/Global/Elements/BodyHeaders/BodyHeaders";

function index() {
  return (
    <>
      <Head>
        <title>FindJob | Contact Us</title>
      </Head>

      <div className="grid place-content-center w-full text-center bg-bgGradient py-20 mt-44">
        <h4 className="text-primary  text-sm mg:text-base uppercase font-semibold">
          Intro
        </h4>
        <h1 className="text-3xl md:text-5xl capitalize lg:text-5xl font-medium">
          Contact Us
        </h1>
      </div>
    </>
  );
}

export default index;
