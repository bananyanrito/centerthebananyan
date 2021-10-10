import React, { useState, useEffect, useRef } from 'react';
import { AbsolutePosContainer } from '../Container';
import { ImageContainer } from '../Image';
import { BananyanDimensions } from '../../constants';

interface BananyanProps {
  hasGodMode: boolean;
  show: boolean;
}

const MOVEMENT_SENSITIVITY = 10;

export const Bananyan: React.FC<BananyanProps> = ({ hasGodMode, show }) => {
  const [top, setTop] = useState<number>(
    () => window.innerHeight * Math.random() * 0.5
  );
  const [left, setLeft] = useState<number>(
    () => window.innerWidth * Math.random() * 0.8
  );

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    let newTop = top,
      newLeft = left;
    switch (e.key) {
      case 'ArrowUp':
        newTop -= MOVEMENT_SENSITIVITY;
        break;
      case 'ArrowDown':
        newTop += MOVEMENT_SENSITIVITY;

        break;
      case 'ArrowLeft':
        newLeft -= MOVEMENT_SENSITIVITY;
        break;
      case 'ArrowRight':
        newLeft += MOVEMENT_SENSITIVITY;

        break;
    }
    setTop(newTop);
    setLeft(newLeft);
  };

  const bananyanRef = useRef<ImageContainer>(null);
  useEffect(() => {
    bananyanRef?.current && bananyanRef?.current.focus();
  });

  return show ? (
    <AbsolutePosContainer
      id='bananyan-div'
      top={top}
      left={left}
      cheatMode={hasGodMode}
      {...BananyanDimensions}
      onKeyDown={onKeyDownHandler}
    >
      <ImageContainer ref={bananyanRef} />
    </AbsolutePosContainer>
  ) : null;
};
