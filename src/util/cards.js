// { title, description, img, price, hash }
import faker from "faker";

faker.seed(123);

export const createCard = () => {
  const title = faker.animal.cat();
  const img = faker.image.animals();
  const price = parseInt(faker.finance.amount());
  console.log(title, img, price);
  return {
    title,
    description: `Own an NFT of ${title}. 1 of 1 available.`,
    img,
    price,
    hash: "xch1xar5z8sp6w0a45wfzs95v0kf4cw63fwm66dgda706dc5y7nnrueq7u7p30", //    faker.finance.ethereumAddress(),
  };
};

const createCardList = () => {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    const c = createCard();
    cards.push(c);
  }

  return cards;
};

export const appendCard = (c) => {
  DEMO_CARDS.push(c);
};

export const DEMO_CARDS = createCardList();
