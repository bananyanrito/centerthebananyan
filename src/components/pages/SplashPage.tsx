import React from 'react';
import { Page } from './Page';
import { PageText } from '../../constants';

export const SplashPage: React.FC = () => (
  <Page column headerText={PageText.SPLASH}>
    <p>Instructions:</p>
    <p>
      Click on Bananyan Cat (I couldn't get autofocus to work RIP) or tab 2-3
      times after clicking start
    </p>
    <p>use ↑↓←→ to move cat</p>
  </Page>
);
