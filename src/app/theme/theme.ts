export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#08090A',
    '--foreground-secondary': '#41474D',
    '--foreground-tertiary': '#797C80',
    '--foreground-quaternary': '#F4FAFF',
    '--foreground-light': '#41474D',

    '--background-default': '#F4FAFF',
    '--background-secondary': '#A3B9CC',
    '--background-tertiary': '#5C7D99',
    '--background-light': '#FFFFFF',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#B2FFE7',

    '--a-default': '#262626',
    '--p-default': '#000',
    '--link-background': '#f2f2f2',
    '--link-color': '#616161',
    '--background-footer' : '#f2f2f2'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground-default': '#5C7D99',
    '--foreground-secondary': '#A3B9CC',
    '--foreground-tertiary': '#F4FAFF',
    '--foreground-quaternary': '#E5E5E5',
    '--foreground-light': '#FFFFFF',

    '--background-default': '#050505',
    '--background-secondary': '#41474D',
    '--background-tertiary': '#08090A',
    '--background-light': '#41474D',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#B2FFE7',
    '--a-default': 'white',
    '--p-default': 'white',
    '--link-background': '#000',
    '--link-color': 'white',
    '--background-footer' : 'black'
  }
};
