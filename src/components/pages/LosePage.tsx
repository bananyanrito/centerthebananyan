import React from 'react';
import { Page } from './Page';
import { PageText } from '../../constants';

interface LosePageProps {
  showHint: boolean;
}

export const LosePage: React.FC<LosePageProps> = ({ showHint }) => (
  <Page column headerText={PageText.LOSE}>
    {showHint && <p>Hint: ↑↑↓↓←→←→B A START</p>}
  </Page>
);
