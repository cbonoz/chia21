// import { FullNode } from "chia-client";
// const { RPCAgent } = require("chia-agent");
// const agent = new RPCAgent({ service: "wallet" });
import { generateMnemonic } from "bip39";
import axios from "axios";
// const { RPCAgent } = require("chia-agent");
// const { get_blockchain_state } = require("chia-agent/api/rpc/full_node");

// const agent = new RPCAgent({ service: "full_node" });

export const generateAddress = async () => {
  var data = JSON.stringify({
    wallet_id: 1,
    new_address: true,
  });

  var config = {
    method: "post",
    url: "https://localhost:9256/get_next_address",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config);
};

// https://github.com/Chia-Network/chia-docker/pkgs/container/chia
export const generateWallet = async () => {
  // generate a Wallet.
  // const fullNode = new FullNode({
  //   protocol: "http",
  //   hostname: "localhost",
  //   port: 8555,
  // });

  // // const state = await get_blockchain_state(agent);
  // const state = fullNode.getBlockchainState();

  // console.log(await state.blockchain_state.space);

  // const wallet = new Wallet({
  //   protocol: "http",
  //   hostname: "localhost",
  //   port: 8555,
  // });

  // const mnemonic = await wallet.generateMnemonic();

  const wallet = {};
  const mnemonic = generateMnemonic();
  // console.log(mnemonic);

  return { mnemonic, wallet };
};

// export const sendTransaction = async (wallet, pw, amount, to, coins) => {
//   await wallet.verifyPassword(pw); // false

//   let input = new TxInput(pw, amount, to, coins);
//   let spendBundle = await wallet.generateSignedTransaction(input);

//   let txhash = spendBundle.name();
//   return { txhash, spendBundle };
// };

export const createCoinUrl = (hash) => `https://www.chiaexplorer.com/blockchain/coin/${hash}`