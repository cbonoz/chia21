// import { Wallet } from "chia-client";
// const { RPCAgent } = require("chia-agent");
// const agent = new RPCAgent({ service: "wallet" });
import { generateMnemonic } from "bip39";

// https://github.com/Chia-Network/chia-docker/pkgs/container/chia
export const generateWallet = async () => {
  // generate a Wallet.

  // const wallet = new Wallet({
  //   protocol: "https",
  //   hostname: "localhost",
  //   port: 8555,
  // });

  // const mnemonic = await wallet.generateMnemonic();
  const wallet = {};
  const mnemonic = generateMnemonic();
  console.log(mnemonic);

  return { mnemonic, wallet };
};

// export const sendTransaction = async (wallet, pw, amount, to, coins) => {
//   await wallet.verifyPassword(pw); // false

//   let input = new TxInput(pw, amount, to, coins);
//   let spendBundle = await wallet.generateSignedTransaction(input);

//   let txhash = spendBundle.name();
//   return { txhash, spendBundle };
// };
