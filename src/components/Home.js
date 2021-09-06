import { Button, Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import ChiaCard from "./Chiacard";

export default function Home() {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState();

  const search = async () => {
    setLoading(true);

    try {
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Discover NFTs on Chia</h1>
      <Input onChange={(e) => setQuery(e.target.value)} value={query} />
      <Button onClick={search} />
      Search<Button></Button>
      <hr />
      {loading && <Spin size="large" />}
      {!loading && results.map((r ,i) => {
          return <ChiaCard key={i} card={r} onClick={onClick}/>
      })}
    </div>
  );
}
