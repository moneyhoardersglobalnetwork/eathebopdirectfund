/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import kaboom from "kaboom";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const MOVE_SPEED = 150;

const Game = () => {
  const canvasRef = useRef(null);

  const { address } = useAccount();

  const { data: randomResult } = useScaffoldContractRead({
    contractName: "EatTheBopDirectFund",
    functionName: "randomResult",
  });

  const { data: life } = useScaffoldContractRead({
    contractName: "EatTheBopDirectFund",
    functionName: "life",
    args: [address],
  });

  const { data: canPlay } = useScaffoldContractRead({
    contractName: "EatTheBopDirectFund",
    functionName: "canPlay",
  });

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "EatTheBopDirectFund",
    functionName: "eatTheBop",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { writeAsync: payGame } = useScaffoldContractWrite({
    contractName: "EatTheBopDirectFund",
    functionName: "playGame",
    value: "10000000000000000", //This passes the value to buy lives button
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  useEffect(() => {
    if (life) {
      startGame();
    }
  }, [canPlay, life]);

  const startGame = () => {
    const k = kaboom({
      global: false,
      canvas: canvasRef.current,
      background: [199, 500, 300],
    });

    k.loadSprite("player-down", "assets/player-down.png");
    k.loadSprite("player-left", "assets/player-left.png");
    k.loadSprite("player-right", "assets/player-right.png");
    k.loadSprite("player-up", "assets/player-up.png");
    k.loadSprite("bopbymhgn", "assets/bop_logo_40x40.png");
    k.loadSprite("wall40x40", "assets/wall40x40.png");

    k.addLevel(
      [
        `  xxx   xex   xex        `,
        `   x  xxxxxxe x          `,
        `   xe x              xxx `,
        ` xxx      e x         xxx`,
        ` x    x   x  xxx         `,
        ` x   xex  x    x         `,
        ` x    x  x          xex  `,
        ` exxxx   xxxx            `,
        `xxxx  xex xexx           `,
      ],
      {
        tileWidth: 50,
        tileHeight: 50,
        tiles: {
          x: () => [k.sprite("wall40x40"), k.area(), k.body()],
          e: () => [k.sprite("bopbymhgn"), k.area(), k.body(), "bopbymhgn"],
        },
      },
    );

    const player = k.add([k.sprite("player-down"), k.pos(100, 100), k.area(), k.body(), "player"]);

    k.onKeyDown("left", () => {
      player.use(k.sprite("player-left"));
      player.move(-MOVE_SPEED, 0);
    });
    k.onKeyDown("right", () => {
      player.use(k.sprite("player-right"));
      player.move(MOVE_SPEED, 0);
    });
    k.onKeyDown("up", () => {
      player.use(k.sprite("player-up"));
      player.move(0, -MOVE_SPEED);
    });
    k.onKeyDown("down", () => {
      player.use(k.sprite("player-down"));
      player.move(0, MOVE_SPEED);
    });

    player.onCollide("bopbymhgn", bopbymhgn => {
      k.destroy(bopbymhgn);
      writeAsync();
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-center my-5">
        Hoarders eat BOP tokens in random zones some are real some are fake. Eating real BOP rewards 6 BOP tokens and
        there is one token in zone 6 that rewards 6000 BOP tokens Good Luck Hoarders!
      </h1>
      <div className="flex justify-center">
        <div className="game w-full">
          <canvas ref={canvasRef}></canvas>
        </div>
        <div className="mr-5">
          <p className="text-2xl mt-10">Lifes = {life?.toString()}</p>
          <p className="text-2xl mt-10">Zone = {randomResult?.toString()}</p>

          <button
            className="py-2 px-4 bg-green-500 rounded baseline hover:bg-green-300 disabled:opacity-50"
            onClick={() => payGame()}
          >
            Buy 6 lifes
          </button>
          <p className="text-slate-500">* Cost 0.01 MATIC</p>
          <p className="text-xl mt-20">Notes</p>
          <p className="text-slate-500 mb-0">*Eating Fake BOP can</p>
          <p className="text-slate-500 mt-0">cost you a life</p>
          <p className="text-slate-500 mb-0">*You pay gas fees to eat and eating changes the zone</p>
          <p className="text-slate-500 mt-0">If the board in reading Zone 6 all tokens are marked</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Game;
