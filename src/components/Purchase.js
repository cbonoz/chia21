import React, { useState, useMemo, useEffect } from "react";
import { DEMO_CARDS } from "../util/cards";
import {
  Row,
  Col,
  Image,
  Modal,
  Button,
  Spin,
  notification,
  Card,
  Breadcrumb,
} from "antd";
import { createCoinUrl } from "../util/chia";

function Purchase({ match, history, address }) {
  const [cards, setCard] = useState(DEMO_CARDS || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const [loading, setLoading] = useState();
  const { nftId, index } = match.params;

  const matchingCard = cards[index];

  console.log("card", cards, nftId, index, matchingCard);

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
      <Breadcrumb>
        <Breadcrumb.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            Home
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">{matchingCard?.title}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
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
                <p>
                  Coin:{" "}
                  <a href={createCoinUrl(matchingCard.hash)} target="_blank">
                    {matchingCard.hash}
                  </a>
                </p>

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
        title={`Confirm purchase: ${matchingCard?.title || "NFT"}`}
        visible={isModalVisible}
        okText="Confirm Purchase"
        confirmLoading={loading}
        onOk={purchase}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>
          Purchase {matchingCard?.title} for {matchingCard?.price} mojos?
        </p>
        {address && <p>Wallet with address {address} will be charged.</p>}
      </Modal>
    </div>
  );
}

export default Purchase;
