import * as faker from 'faker/locale/en_US';
export interface Authenticate {
    username: string;
    password: string;
  }

export  const generateUser = (): Authenticate  => {
    return {
      username: faker.internet.userName(),
      password :  faker.internet.password(),
    };
  };

export const generateUsers = (
    count = faker.random.number({ min: 1, max: 20 })
  ): Authenticate[] => {
    return Array.apply(null, Array(count)).map(() => generateUser());
  };
