import React from 'react';
import { PageState, GodMode } from '../../constants';
import {
  SplashPage,
  CheatCodePage,
  WinPage,
  LosePage,
  CanvasPage,
  Bananyan,
} from './';

interface PageProps {
  pageState: PageState;
  turnOnCheat: (mode: GodMode) => void;
  godMode: string;
  attempts: number;
}

export const Page: React.FC<PageProps> = ({
  pageState,
  turnOnCheat,
  godMode,
  attempts,
}) => {
  const hasGodMode = godMode !== GodMode.NAY;
  switch (pageState) {
    case PageState.SPLASH:
      return <SplashPage />;
    case PageState.CANVAS:
      return (
        <>
          <CanvasPage hasGodMode={hasGodMode} />
          <Bananyan hasGodMode={hasGodMode} />
        </>
      );
    case PageState.WIN:
      return <WinPage hasGodMode={hasGodMode} />;
    case PageState.LOSE:
      return <LosePage attempts={attempts} />;
    case PageState.CHEAT_CODE:
      return (
        <CheatCodePage turnOnCheat={turnOnCheat} hasGodMode={hasGodMode} />
      );
  }
};
