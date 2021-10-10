import React from 'react';
import { BasePage } from './BasePage';
import { Button } from '../buttons/Button';
import { PageText, PRIZE_URL } from '../../constants';

interface WinPageProps {
  hasGodMode: boolean;
}

export const WinPage: React.FC<WinPageProps> = ({ hasGodMode }) => {
  return (
    <BasePage column headerText={PageText.WIN}>
      {hasGodMode && (
        <Button onClick={() => window.open(PRIZE_URL, '_blank')}>
          Claim Prize
        </Button>
      )}
    </BasePage>
  );
};
