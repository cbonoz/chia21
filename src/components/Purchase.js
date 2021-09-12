import React, { useState, useMemo, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import { Row, Col, Image, Modal, Button, Spin, notification, Card } from "antd";

function Purchase({ match, history }) {
  const [cards, setCard] = useState(DEMO_CARDS);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

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
      setIsModalVisible(false);
      const title = `${matchingCard?.title || "NFT"}`;
      notification.open({
        message: title,
        description: `${title} has been added to your wallet!`,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      history.push("/");
    }, 1000);
  };

  const openModal = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(true);
    }, 1000);
  };

  return (
    <div className="content">
      <h1>Purchase NFT: {matchingCard?.title}</h1>
      {nftId}
      <br />
      <br />
      <hr />
      <br />
      {!matchingCard && <Spin />}

      {matchingCard && (
        <Row className="purchase-content">
          <Col span={12}>
            <div className="purchase-info align-left">
              <Card size="large" title={matchingCard.title}>
                <h3>{matchingCard.description}</h3>
                <h4>Price: {matchingCard.price} mojos</h4>
                <p>Coin: {matchingCard.hash}</p>

                {matchingCard.createdAt && (
                  <p>First created: {matchingCard.createdAt}</p>
                )}

                <Button
                  className="purchase-button"
                  onClick={openModal}
                  loading={loading}
                  type="primary"
                >
                  Buy now ({matchingCard.price} mojos)
                </Button>
              </Card>

              <br />
              <br />
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
        okText="Confirm Purchase"
        confirmLoading={loading}
        onOk={purchase}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>
          Purchase {matchingCard?.title} for {matchingCard?.price} mojos?
        </p>
      </Modal>
    </div>
  );
}

export default Purchase;
