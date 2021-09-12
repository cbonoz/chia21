import { Button, Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import ChiaCard from "./ChiaCard";
import chia from "../assets/chia_logo.png";

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
      <div className='header-text'>
        Discover NFTs on <img src={chia} className='header-icon' />
      </div>
      <Input
        placeholder="Search by puzzle hash, address, or NFT name"
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
