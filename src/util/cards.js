// { title, description, img, price, hash }
import faker from "faker";

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
    hash: "0x36b520fd8f949a8a7466eb103b1dfadd4caf71c384533026d4ca18c2e59982c5",
    createdAt,
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
