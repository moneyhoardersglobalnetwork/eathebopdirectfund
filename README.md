Eat The BOP Game ft ChainLink VRF & CCIP
2D game where you eat BOP tokens looking for the real BOP token on the level to win and earn BOP.

The Hoarders searches the board for the real BOP token amoung the fake tokens. The hoarder may have obstacles to move before being able to reach certain tokens. Each time a hoarder eats a token they pay a small fee with a random chance of winning a reward paid in BOP tokens.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Chainlink and Typescript.

EatTheBopDirectFund = 0xfBB287E3cd2Dcae6faf632e132EDD87060c0C63D // Sepolia - Drain this contract
EatTheBOP Direct Fund 2 = 0x4B53b109F489D4D382d18C5D120f15f6B9a62E1A

Vercel 


How to Play
You first need lifes to play Eat The BOP after clicking the play button look for the Buy Lifes button to purchase 3 Lifes

Contents
Requirements
Quickstart
Requirements
Before you begin, you need to install the following tools:

Node (v18 LTS)
Yarn (v1 or v2+)
Git
Quickstart
To get started with Scaffold-ETH 2, follow the steps below:

Clone this repo & install dependencies
git clone https://github.com/moneyhoardersglobalnetwork/eatthebop.git
cd eatthebop
yarn install
Run a local network in the first terminal:
yarn chain
This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in hardhat.config.ts.

On a second terminal, deploy the test contract:
yarn deploy
This command deploys a test smart contract to the local network. The contract is located in packages/hardhat/contracts and can be modified to suit your needs. The yarn deploy command uses the deploy script located in packages/hardhat/deploy to deploy the contract to the network. You can also customize the deploy script.

On a third terminal, start your NextJS app:
yarn start
Visit your app on: http://localhost:3000. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in packages/nextjs/scaffold.config.ts.

Run smart contract test with yarn hardhat:test

Scaffold-ETH-2 gives us a foundation interface to quickly interact with the game contract.

Edit your smart contract YourContract.sol in packages/hardhat/contracts

Edit your frontend in packages/nextjs/pages

Edit your deployment scripts in packages/hardhat/deploy

Find the main game smart contract EatTheBop.sol in packages/hardhat/contracts

Edit your frontend in packages/nextjs/pages

Edit your deployment scripts in packages/hardhat/deploy

ChainLink features we plan to use are Price Feeds, VRF, and CCIP

Github pushing Git Hub Staging, Commiting, Pushing //Commands for updating repo on github(Build this out)

//Check remote origin

git remote set-url origin https://github.com/USERNAME/REPOSITORY.git

git remote -v

git add . //adds modified files to commit# mhgn-hoarding-gateway

git commit -m "update from local" // Commit your changes to be pushed to repo

Use the --no-verify option to skip git commit hooks, e.g. git commit -m "commit message" --no-verify . When the --no-verify option is used, the pre-commit and commit-msg hooks are bypassed. Copied! You can also use the -n option, which is short for --no-verify .

git push //push to repo //Push updates to repo (main)