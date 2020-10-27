import * as faker from 'faker/locale/en_US';
export interface Service {
    text: string;
    id: number;
    price: string;
}

export  const generateService = (): Service => {
    return {
      id: faker.random.number(),
      price: faker.random.number(),
      text :  faker.lorem.word(),
    };
  };

export const generateServices = (
    count = faker.random.number({ min: 1, max: 20 })
  ): Service[] => {
    return Array.apply(null, Array(count)).map(() => generateService());
  };
