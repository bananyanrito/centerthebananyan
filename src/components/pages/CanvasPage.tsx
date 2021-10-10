import React from 'react';
import { CenterContainer } from '../Container';
import { BasePage } from './BasePage';
import { BananyanDimensions } from '../../constants';

interface CanvasPageProps {
  hasGodMode: boolean;
}

export const CanvasPage: React.FC<CanvasPageProps> = ({ hasGodMode }) => {
  return (
    <BasePage>
      <CenterContainer cheatMode={hasGodMode} {...BananyanDimensions} />
    </BasePage>
  );
};
