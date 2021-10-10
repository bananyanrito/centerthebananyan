import React from 'react';
import { Page } from './Page';
import { Button } from '../buttons/Button';
import { PageText } from '../../constants';

interface WinPageProps {
  hasGodMode: boolean;
}

export const WinPage: React.FC<WinPageProps> = ({ hasGodMode }) => {
  return (
    <Page column headerText={PageText.WIN}>
      {hasGodMode && (
        <Button
          onClick={() =>
            window.open(
              'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s',
              '_blank'
            )
          }
        >
          Claim Prize
        </Button>
      )}
    </Page>
  );
};
