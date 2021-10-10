import React, { useState } from 'react';
import {
  ButtonGroupContainer,
  AppContainer,
  AbsolutePosContainer,
} from './components/Container';
import { Button } from './components/buttons/Button';
import { SplashPage } from './components/pages/Page';
import { CheatCodePage } from './components/pages/CheatCodePage';
import { WinPage } from './components/pages/WinPage';
import { LosePage } from './components/pages/LosePage';
import { CanvasPage } from './components/pages/CanvasPage';
import { Bananyan } from './components/pages/Bananyan';
import { PageState, GodMode } from './constants';

const App: React.FC = () => {
  const [pageState, setPageState] = useState<PageState>(PageState.SPLASH);
  const [godMode, setGodMode] = useState<string>(
    localStorage.getItem('godMode') ?? GodMode.NAY.toString()
  );

  const [attempts, setAttempts] = useState<number>(() => {
    const storedAttempts = localStorage.getItem('attempts');
    return storedAttempts !== null ? parseInt(storedAttempts) : 0;
  });

  const godModeActivation = (mode: GodMode): void => {
    setGodMode(mode);
    localStorage.setItem('godMode', mode);
  };

  const updateAttempts = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    localStorage.setItem('attempts', '' + newAttempts);
  };

  return (
    <AppContainer>
      <AbsolutePosContainer top={10} right={20}>
        <p>Attempts: {attempts}</p>
      </AbsolutePosContainer>
      {showPage(pageState, godModeActivation, godMode, attempts)}
      <ButtonGroupContainer>
        <Button onClick={() => setPageState(PageState.CANVAS)}>
          {pageState === PageState.LOSE ? 'Try again' : 'Start'}
        </Button>
        <Button
          onClick={() => {
            setPageState(looksGoodToMe(godMode));
            updateAttempts();
          }}
        >
          Looks good to me
        </Button>
        <Button onClick={() => setPageState(PageState.CHEAT_CODE)}>
          I have a cheat code
        </Button>
        {godMode !== GodMode.NAY && (
          <>
            <Button onClick={() => setPageState(PageState.WIN)}>
              Show Win
            </Button>
            <Button onClick={() => setPageState(PageState.LOSE)}>
              Show Lose
            </Button>
            <Button onClick={() => setPageState(PageState.SPLASH)}>
              Show Splash
            </Button>
            <Button onClick={() => godModeActivation(GodMode.NAY)}>
              Turn Off God Mode
            </Button>
          </>
        )}
        <Button onClick={() => godModeActivation(GodMode.NADIA)}>
          Force God Mode
        </Button>
      </ButtonGroupContainer>
    </AppContainer>
  );
};

const showPage = (
  pageState: PageState,
  turnOnCheat: Function,
  godMode: string,
  attempts: number
) => {
  const hasGodMode = godMode !== GodMode.NAY;
  switch (pageState) {
    case PageState.SPLASH:
      return <SplashPage />;
    case PageState.CANVAS:
      return (
        <>
          <Bananyan
            show={pageState === PageState.CANVAS}
            hasGodMode={hasGodMode}
          />
          <CanvasPage hasGodMode={hasGodMode} />
        </>
      );
    case PageState.WIN:
      return <WinPage hasGodMode={hasGodMode} />;
    case PageState.LOSE:
      return <LosePage showHint={attempts > 1} />;
    case PageState.CHEAT_CODE:
      return (
        <CheatCodePage turnOnCheat={turnOnCheat} hasGodMode={hasGodMode} />
      );
  }
};

const looksGoodToMe = (godMode: string) =>
  godMode === GodMode.NADIA ? PageState.WIN : PageState.LOSE;

export default App;
