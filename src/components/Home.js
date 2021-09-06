import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";

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
    </div>
  );
}
