// { title, description, img, price, hash }
import faker from "faker";
import { DEMO_HASH } from ".";

faker.seed(123);

export const createCard = () => {
  const title = faker.animal.cat();
  const img = `${faker.image.animals()}?random=${Math.round(
    Math.random() * 1000
  )}`;
  const price = parseInt(faker.finance.amount());
  const c = faker.date.recent();
  const createdAt = `${c.toDateString()} ${c.toLocaleTimeString()}`;
  console.log(title, img, price);
  return {
    title,
    description: `Own a NFT of ${title}. 1 of 1 available.`,
    img,
    price,
    hash: DEMO_HASH,
    createdAt,
  };
};

const createCardList = () => {
  const cards = [];
  for (let i = 0; i < 5; i++) {
    const c = createCard();
    cards.push(c);
  }

  return cards;
};

export const appendCard = (c) => {
  DEMO_CARDS.push(c);
};

export const DEMO_CARDS = createCardList();
