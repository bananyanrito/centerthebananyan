import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, AbsolutePosContainer } from './components/Container';
import { PageButton } from './components/buttons/PageButton';
import { Button } from './components/buttons/Button';
import { SplashPage } from './components/pages/SplashPage';
import { CheatCodePage } from './components/pages/CheatCodePage';
import { WinPage } from './components/pages/WinPage';
import { LosePage } from './components/pages/LosePage';
import { CanvasPage } from './components/pages/CanvasPage';
import { Bananyan } from './components/pages/Bananyan';
import { PageState, GodMode, ITheme, PVRTheme, TomatoTheme } from './constants';

const App: React.FC = () => {
  const [pageState, setPageState] = useState<PageState>(PageState.SPLASH);
  const [godMode, setGodMode] = useState<string>(
    localStorage.getItem('godMode') ?? GodMode.NAY.toString()
  );

  const [attempts, setAttempts] = useState<number>(() => {
    const storedAttempts = localStorage.getItem('attempts');
    return storedAttempts !== null ? parseInt(storedAttempts) : 0;
  });

  const [currentTheme, setTheme] = useState<ITheme>(PVRTheme);

  const godModeActivation = (mode: GodMode): void => {
    setGodMode(mode);
    localStorage.setItem('godMode', mode);
  };

  const incrementAttempts = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    localStorage.setItem('attempts', '' + newAttempts);
  };

  const getOtherTheme = () =>
    currentTheme === PVRTheme ? TomatoTheme : PVRTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <AbsolutePosContainer column top={10} right={20}>
          <h2>Attempts: {attempts}</h2>
          <ThemeProvider theme={getOtherTheme()}>
            <Button onClick={() => setTheme(getOtherTheme())}>
              Change Theme
            </Button>
          </ThemeProvider>
        </AbsolutePosContainer>
        {showPage(pageState, godModeActivation, godMode, attempts)}
        <PageButton
          pageState={pageState}
          setPageState={setPageState}
          godMode={godMode}
          setGodMode={setGodMode}
          attempts={attempts}
          incrementAttempts={incrementAttempts}
        />
      </AppContainer>
    </ThemeProvider>
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
          <CanvasPage hasGodMode={hasGodMode} />
          <Bananyan
            show={pageState === PageState.CANVAS}
            hasGodMode={hasGodMode}
          />
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

export default App;
