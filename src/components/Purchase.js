import React, { useState, useMemo, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import { Row, Col, Image, Modal, Button, Spin } from "antd";

function Purchase({ match }) {
  const [cards, setCard] = useState(DEMO_CARDS);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [loading, setLoading] = useState();
  const nftId = match.params.nftId;

  const matchingCard = useMemo(
    () => cards.find((x) => x.hash === nftId),
    [nftId, cards]
  );

  console.log("card", DEMO_CARDS, nftId, matchingCard);

  const purchase = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(true);
    }, 2000);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="content">
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
              <p>{matchingCard.hash}</p>

              {matchingCard.createdAt && (
                <p>First created: {matchingCard.createdAt}</p>
              )}
              <br />
              <br />

              <Button onClick={purchase} loading={loading}>
                Buy now ({matchingCard.price} mojos)
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <Image src="purchase-image" src={matchingCard.img} />
          </Col>
        </Row>
      )}
      <Modal
        title={`${matchingCard?.title || "NFT"} purchased!`}
        visible={isModalVisible}
        onOk={handleOk}
        // onCancel={handleCancel}
      >
        <p>Token has been added to your wallet.</p>
      </Modal>
    </div>
  );
}

export default Purchase;
