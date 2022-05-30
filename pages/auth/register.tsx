import Head from "next/head";
import React from "react";
import SignUp from "../../components/Pages/SignUp/SignUp";

function register() {
  return (
    <>
      <Head>
        <title>FindJob | register</title>
      </Head>

      <SignUp />
    </>
  );
}

export default register;
