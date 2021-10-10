import React from 'react';
import { BasePage } from './BasePage';
import { Button } from '../buttons';
import { PageText } from '../../constants';

interface LosePageProps {
  attempts: number;
}

export const LosePage: React.FC<LosePageProps> = ({ attempts }) => (
  <BasePage column headerText={PageText.LOSE}>
    {attempts > 1 && <p>Hint: ↑↑↓↓←→←→B A START</p>}
    {attempts > 2 && (
      <p>
        Hint:{' '}
        <Button
          onClick={() =>
            window.open(
              'https://github.com/bananyanrito/centerthebananyan/blob/main/src/cheatCodes.ts',
              '_blank'
            )
          }
        >
          Cheat Codes
        </Button>
      </p>
    )}
    {attempts > 3 && <p>Hint: One of them is not like the others</p>}
    {attempts > 4 && (
      <p>
        Hint:{' '}
        <Button
          onClick={() =>
            window.open(
              'https://github.com/bananyanrito/centerthebananyan/blob/main/src/components/buttons/PageButton.tsx#L40',
              '_blank'
            )
          }
        >
          Sauce
        </Button>
      </p>
    )}
  </BasePage>
);
