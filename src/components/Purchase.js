import React, { useState, useMemo, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import { Row, Col, Image, Button, Spin } from "antd";

import PropTypes from "prop-types";

function Purchase({ match }) {
  const [cards, setCard] = useState(DEMO_CARDS);
  const [loading, setLoading] = useState();
  const nftId = match.params.nftId;

  const matchingCard = useMemo(
    () => cards.find((x) => x.hash === nftId),
    [nftId, cards]
  );

  console.log("card", DEMO_CARDS, nftId, matchingCard);

  const purchase = async () => {
    setLoading(true);

    setLoading(false);
  };

  return (
    <div>
      <h1>Purchase NFT</h1>
      {nftId}
      <br />
      <br />
      <hr />
      <br />
      {!matchingCard && <Spin />}

      {matchingCard && (
        <Row>
          <Col span={12}>
            <div className="purchase-info align-left">
              <h1>{matchingCard.title}</h1>
              <h3>{matchingCard.description}</h3>
              <h4>Price: {matchingCard.price} mojos</h4>
              <br />
              <br />

              <Button onClick={purchase} loading={loading}>
                Buy now
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <Image src="purchase-image" src={matchingCard.img} />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Purchase;
