import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Game from "~~/components/Game";

const GameMain: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eat The BOP</title>
        <meta
          name="description"
          content="A M.H.G.N dApp Created with 🏗 scaffold-eth-2. The goal is to find the real BOP token on the board. "
        />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Game />
      </div>
    </>
  );
};

export default GameMain;
