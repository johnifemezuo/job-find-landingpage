import Head from "next/head";
import React from "react";
import Login from "../../components/Pages/LoginIndex/Login";

function login() {
  return (
    <>
      <Head>
        <title>FindJob | Login</title>
      </Head>

      <Login />
    </>
  );
}

export default login;
