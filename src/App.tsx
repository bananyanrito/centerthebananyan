import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, AbsolutePosContainer } from './components/Container';
import { Button, PageButton } from './components/buttons';
import { Page } from './components/pages';
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
              Shiny Object
            </Button>
          </ThemeProvider>
        </AbsolutePosContainer>
        <Page
          pageState={pageState}
          turnOnCheat={godModeActivation}
          godMode={godMode}
          attempts={attempts}
        />
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

export default App;
