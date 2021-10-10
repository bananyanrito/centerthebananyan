import React from 'react';
import { BasePage } from './BasePage';
import { PageText } from '../../constants';

interface LosePageProps {
  showHint: boolean;
}

export const LosePage: React.FC<LosePageProps> = ({ showHint }) => (
  <BasePage column headerText={PageText.LOSE}>
    {showHint && <p>Hint: ↑↑↓↓←→←→B A START</p>}
  </BasePage>
);
