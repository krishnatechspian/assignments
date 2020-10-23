import * as faker from 'faker/locale/en_US';
export interface Details {
    text?: string;
    id?: number;
    url?: string;
    details?: string;
  }


export  const generateDetail = (): Details => {
    return {
      id: faker.random.number(),
      url: faker.image.imageUrl(),
      details: faker.lorem.words(),
      text :  faker.lorem.word(),
    };
  };

export const generateDetails = (
    count = faker.random.number({ min: 1, max: 20 })
  ): Details[] => {
    return Array.apply(null, Array(count)).map(() => generateDetail());
  };



