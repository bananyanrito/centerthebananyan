export enum PageText {
  WIN = 'WOOHOO!',
  LOSE = 'EPIC FAIL',
  SPLASH = 'Can you center the Bananyan cat div?',
  CHEAT_CODE = 'Please enter your cheat code',
}

export enum PageState {
  SPLASH = 1,
  CANVAS,
  WIN,
  LOSE,
  CHEAT_CODE,
}

export enum GodMode {
  NAY = 'nay',
  NORMAL = 'yay',
  NADIA = 'nadia',
}

export const PRIZE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s';

export const BananyanDimensions = {
  minWidth: '50px',
  minHeight: '50px',
  width: '20vmin',
  height: '20vmin',
};

export const AppDimensions = {
  width: '100vw',
  height: '100vh',
  minWidth: '200px',
  minHeight: '200px',
};

export interface ITheme {
  main: string;
  secondary: string;
  fontFamily: string;
}

export const PVRTheme: ITheme = {
  main: 'palevioletred',
  secondary: 'white',
  fontFamily: "'Roboto', sans-serif",
};

export const TomatoTheme: ITheme = {
  main: 'tomato',
  secondary: 'white',
  fontFamily: "'Roboto', sans-serif",
};
