import React, { useState } from 'react';
import { BasePage } from './BasePage';
import { Input } from '../Input';
import { Button } from '../buttons/Button';
import { GodMode, PageText } from '../../constants';
import { CheatCodes } from '../../cheatCodes';

interface CheatCodePageProps {
  turnOnCheat: Function;
  hasGodMode: boolean;
}

export const CheatCodePage: React.FC<CheatCodePageProps> = ({
  turnOnCheat,
  hasGodMode,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const checkCheatCode = (): string => {
    const mode = Object.values(CheatCodes)
      .filter(cheatCode => cheatCode === inputValue.toLowerCase())
      .map(matchingCheatCode =>
        matchingCheatCode === CheatCodes.NADIA ? GodMode.NADIA : GodMode.NORMAL
      );
    return mode.pop() ?? GodMode.NAY;
  };

  return (
    <BasePage column headerText={PageText.CHEAT_CODE}>
      {hasGodMode && <p>God mode is ON</p>}
      <Input onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <Button
        onClick={() => {
          turnOnCheat(checkCheatCode());
          setInputValue('');
        }}
      >
        Check
      </Button>
    </BasePage>
  );
};
