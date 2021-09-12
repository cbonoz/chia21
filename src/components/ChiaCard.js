import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const DEFAULT_IMG =
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";

function ChiaCard({ index, onClick, card }) {
  const { title, description, img, price, hash } = card || {};
  return (
    <Card
      hoverable
      onClick={() => {
        onClick && onClick(index, hash);
      }}
      style={{ width: 240 }}
      cover={<img alt={title} src={img || DEFAULT_IMG} />}
    >
      <Meta title={title} description={description + " " + price} />
    </Card>
  );
}

export default ChiaCard;
