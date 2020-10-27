import { CARDNUMBER_PATTERN_MESSAGE, CVV_PATTERN_MESSAGE, CYRILLIC_PATTERN_MESSAGE, EMAIL_PATTERN_MESSAGE } from './validation-messages-list';

export const EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$';
export const CYRILLIC_PATTERN = '^[А-Яа-яЁё\\s]+$';
export const CARDNUMBER_PATTERN = '^4[0-9]{12}(?:[0-9]{3})?$';
export const CVV_PATTERN = '^[0-9]{3}$';


export const PATTERNS_LIST: Array<{ PATTERN: string, MESSAGE: string }> = [
  {
    PATTERN: EMAIL_PATTERN,
    MESSAGE: EMAIL_PATTERN_MESSAGE
  }, {
    PATTERN: CYRILLIC_PATTERN,
    MESSAGE: CYRILLIC_PATTERN_MESSAGE
  },
  {
    PATTERN: CARDNUMBER_PATTERN,
    MESSAGE: CARDNUMBER_PATTERN_MESSAGE
  },
  {
    PATTERN: CVV_PATTERN,
    MESSAGE: CVV_PATTERN_MESSAGE
  }
];
