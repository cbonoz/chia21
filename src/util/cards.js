// { title, description, img, price, hash }
import faker from "faker";

export const createCard = () => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img: faker.image.imageUrl(),
    price: 300,
    hash: "xch1xar5z8sp6w0a45wfzs95v0kf4cw63fwm66dgda706dc5y7nnrueq7u7p30" //    faker.finance.ethereumAddress(),
  };
};

const createCardList = () => {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    const c = createCard();
    cards.push(c);
  }

  return cards;
};

export const appendCard = (c) => {
    DEMO_CARDS.push(c)
}

export const DEMO_CARDS = createCardList();
