import React from 'react';
import { Button } from './Button';
import { ButtonGroupContainer } from '../Container';
import { PageState, GodMode } from '../../constants';

interface PageStateButtonProps {
  pageState: PageState;
  setPageState: (value: React.SetStateAction<PageState>) => void;
  godMode: string;
  setGodMode: (mode: GodMode) => void;
  attempts: number;
  incrementAttempts: () => void;
}

export const PageButton: React.FC<PageStateButtonProps> = ({
  pageState,
  setPageState,
  godMode,
  setGodMode,
  attempts,
  incrementAttempts,
}) => {
  const getButtonByState = () => {
    switch (pageState) {
      case PageState.SPLASH:
        return (
          <>
            <Button onClick={() => setPageState(PageState.CANVAS)}>
              Start
            </Button>
            {getCheatCodeButton()}
          </>
        );
      case PageState.CANVAS:
        return (
          <>
            <Button
              onClick={() => {
                setPageState(
                  godMode === GodMode.NADIA ? PageState.WIN : PageState.LOSE
                );
                incrementAttempts();
              }}
            >
              Looks good to me
            </Button>
            {getCheatCodeButton()}
          </>
        );
      case PageState.WIN:
        return (
          <>
            <Button onClick={() => setPageState(PageState.CANVAS)}>
              Play Again
            </Button>
            {getCheatCodeButton()}
          </>
        );
      case PageState.LOSE:
        return (
          <>
            <Button onClick={() => setPageState(PageState.CANVAS)}>
              Try Again
            </Button>
            {getCheatCodeButton()}
          </>
        );
      case PageState.CHEAT_CODE:
        return (
          <>
            <Button onClick={() => setPageState(PageState.CANVAS)}>
              Back To Game
            </Button>
            <Button onClick={() => setGodMode(GodMode.NAY)}>
              Turn off God Mode
            </Button>
          </>
        );
    }
  };

  const getCheatCodeButton = () =>
    attempts > 1 && (
      <Button onClick={() => setPageState(PageState.CHEAT_CODE)}>
        I have a cheat code
      </Button>
    );

  return <ButtonGroupContainer>{getButtonByState()}</ButtonGroupContainer>;
};
