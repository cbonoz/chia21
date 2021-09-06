import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const DEFAULT_IMG =
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";

function ChiaCard({ key, onClick, card }) {
  const { title, description, img, price, hash } = card || {};
  return (
    <span key={key}>
      <Card
        hoverable
        onClick={() => {
          onClick && onClick(hash);
        }}
        style={{ width: 240 }}
        cover={<img alt={title} src={img || DEFAULT_IMG} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </span>
  );
}

export default ChiaCard;
