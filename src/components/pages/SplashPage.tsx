import React from 'react';
import { BasePage } from './BasePage';
import { PageText } from '../../constants';

export const SplashPage: React.FC = () => (
  <BasePage column headerText={PageText.SPLASH}>
    <p>Instructions:</p>
    <p>
      Click on Bananyan Cat (I couldn't get autofocus to work RIP) or tab 2-3
      times after clicking start
    </p>
    <p>use ↑↓←→ or drag to move cat</p>
    <p>PRs WELCOME</p>
    <p>ps. you can't shortcut it with DevTools</p>
  </BasePage>
);
