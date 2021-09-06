const { RPCAgent } = require("chia-agent");
const { generate_mnemonic } = require("chia-agent/api/rpc/wallet");
const agent = new RPCAgent({ service: "wallet" });

export const generateWallet = async () => {
  const response = await generate_mnemonic(agent);
  return response;
};
