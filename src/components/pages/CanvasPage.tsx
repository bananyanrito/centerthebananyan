import React from 'react';
import { CenterContainer } from '../Container';
import { Page } from './Page';
import { BananyanDimensions } from '../../constants';

interface CanvasPageProps {
  hasGodMode: boolean;
}

export const CanvasPage: React.FC<CanvasPageProps> = ({ hasGodMode }) => {
  return (
    <Page>
      <CenterContainer cheatMode={hasGodMode} {...BananyanDimensions} />
    </Page>
  );
};
