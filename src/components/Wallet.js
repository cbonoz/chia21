import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
// import { generateWallet } from "../util/chia";

function Wallet(props) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      //   const res = await generateWallet();
      //   setResult(res);
    } catch (e) {
      console.error("err", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>
        Create a wallet to begin using Chiaspace, or use your existing address.
      </h1>

      <Button onClick={generate} loading={loading}>
        Create wallet
      </Button>
      <hr />
      {result && <p>{JSON.stringify(result)}</p>}
    </div>
  );
}

Wallet.propTypes = {};

export default Wallet;
