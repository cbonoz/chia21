import React, { useState } from "react";
import { DEMO_CARDS } from "../util/cards";
import PropTypes from "prop-types";

function Purchase({ match }) {
  const nftId = match.params.nftId;

  const matchingCard = DEMO_CARDS.find((x) => x.hash === nftId);
  console.log("card", DEMO_CARDS, nftId, matchingCard);
  return (
    <div>
      <h1>Purchase</h1>
      {nftId}
      {matchingCard && <div>{JSON.stringify(matchingCard)}</div>}
    </div>
  );
}

Purchase.propTypes = {};

export default Purchase;
