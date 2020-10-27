import * as faker from 'faker/locale/en_US';
export interface Product {
    name: string;
    category: string;
    id: number;
}

export  const generateProduct = (): Product => {
    return {
      id: faker.random.number(),
      name: faker.lorem.words(),
      category :  faker.lorem.word()
    };
  };

export const generateProducts = (
    count = faker.random.number({ min: 1, max: 20 })
  ): Product[] => {
    return Array.apply(null, Array(count)).map(() => generateProduct());
  };
