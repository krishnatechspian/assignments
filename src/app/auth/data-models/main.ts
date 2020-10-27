import * as faker from 'faker/locale/en_US';
export interface Main {
    text?: string;
    id?: number;
    url?: string;
    details?: string;
  }

export  const generateMain = (): Main => {
    return {
      id: faker.random.number(),
      url: faker.image.imageUrl(),
      details: faker.lorem.words(),
      text :  faker.lorem.word(),
    };
  };

export const generateMains = (
    count = faker.random.number({ min: 1, max: 20 })
  ): Main[] => {
    return Array.apply(null, Array(count)).map(() => generateMain());
  };



