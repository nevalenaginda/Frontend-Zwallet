import React from "react";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Zwallet | {props.title}</title>
      </Head>
      {props.children}
    </>
  );
}
