import * as faker from 'faker/locale/en_US';
export interface HeaderButtons {
    text: string;
    id: number;
  }

export  const generateHeaderButton = (): HeaderButtons  => {
    return {
      id: faker.random.number(),
      text :  faker.lorem.word(),
    };
  };

export const generateHeaderButtons = (
    count = faker.random.number({ min: 1, max: 20 })
  ): HeaderButtons[] => {
    return Array.apply(null, Array(count)).map(() => generateHeaderButton());
  };
