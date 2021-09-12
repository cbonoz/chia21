import React, { useState } from "react";
import { Button, Input } from "antd";
import { generateWallet } from "../util/chia";
import { Card } from "antd";

import { APP_NAME } from "../util";

function Wallet(props) {
  const [result, setResult] = useState();
  const [pw, setPw] = useState();
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await generateWallet();
      setResult(res);
    } catch (e) {
      console.error("err", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content">
      <h1>
        Create a wallet to begin using {APP_NAME}, or use your existing address.
      </h1>

      <Input
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="Enter wallet password"
      />

      <Button onClick={generate} loading={loading} disabled={!pw}>
        Create wallet
      </Button>
      <br />
      <hr />
      <div className="wallet-area">
        {result && (
          <div>
            <h3>Write down this mnemonic! You will only be shown this once.</h3>
            <p>
              You can use the wallet to generate addresses for use with{" "}
              {APP_NAME}.
            </p>
            {result.mnemonic.split(" ").map((c, i) => {
              return (
                <Card key={i} style={{ width: 300 }}>
                  {c}
                </Card>
              );
            })}
            <p>{JSON.stringify(result)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

Wallet.propTypes = {};

export default Wallet;
