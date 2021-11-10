import React, { createContext, useContext, useReducer } from 'react'
import faker from 'faker';
import { cardReducer } from './Reducer'

const Card = createContext()

faker.seed(99);

const Context = ({ childern }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  // console.log(products);

  const [state, dispatch] = useReducer(cardReducer, {
    products: products,
    card: []
  });

  return (
    <Card.Provider value={{ state, dispatch }}>
      {childern}
    </Card.Provider>
  );
};

export const CartState = () => {
  return useContext(Card)
};

export default Context

