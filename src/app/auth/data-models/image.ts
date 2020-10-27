import * as faker from 'faker/locale/en_US';
export interface Image {
    url: string;
    id: number;
  }


export  const generateImage = (): Image => {
      return {
        id: faker.random.number(),
        url: faker.image.imageUrl()
      };
    };

export const generateImages = (
      count = faker.random.number({ min: 1, max: 20 })
    ): Image[] => {
      return Array.apply(null, Array(count)).map(() => generateImage());
    };
