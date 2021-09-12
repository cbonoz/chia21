import { Button, Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import ChiaCard from "./ChiaCard";
import chia from "../assets/chia_logo.png";
import * as Fuse from "fuse.js";

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ["title", "description", "hash"],
};

export default function Home({ history }) {
  const [query, setQuery] = useState();
  const [results, setResults] = useState(DEMO_CARDS);
  const [loading, setLoading] = useState();

  const onClick = (index, hash) => {
    // TODO: navigate to purchase page.
    const path = `/nft/${index}/${hash}`;
    // window.location.pathname = ;
    history.push(path);
  };

  const search = async () => {
    setLoading(true);

    try {
      if (query) {
        const fuse = new Fuse(results, options);
        // Change the pattern
        const res = fuse.search(query);
        setResults(res.map((x) => x.item));
      } else {
        setResults(DEMO_CARDS);
      }
    } catch (e) {
      console.error("err", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="header-text">
        Discover NFTs on <img src={chia} className="header-icon" />
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
        results.map((r, key) => {
          return (
            <span key={key}>
              <ChiaCard index={key} card={r} onClick={onClick} />;
            </span>
          );
        })}
    </div>
  );
}
