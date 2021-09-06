// { title, description, img, price, hash }
import faker from "faker";

export const createCard = () => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img: faker.image.imageUrl(),
    price: 300,
    hash: faker.finance.ethereumAddress(),
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

export const DEMO_CARDS = createCardList();
