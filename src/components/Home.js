import { Button, Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import ChiaCard from "./ChiaCard";

export default function Home({ history }) {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState();

  const onClick = (hash) => {
    // TODO: navigate to purchase page.
    const path = `/nft/${hash}`;
    // window.location.pathname = ;
    history.push(path);
  };

  const search = async () => {
    setLoading(true);

    try {
      // TODO: add api call
      setResults(DEMO_CARDS);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Discover NFTs on Chia</h1>
      <Input
        placeholder="Search NFTs/coins"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button onClick={search}>Search</Button>
      <br />
      <br />
      <br />
      <hr />
      {loading && <Spin size="large" />}
      {!loading &&
        results.map((r, i) => {
          return <ChiaCard index={i} card={r} onClick={onClick} />;
        })}
    </div>
  );
}
