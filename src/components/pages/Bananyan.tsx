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

  /**
   * The other solution I tried was to attach the keydown listener to the root element
   * in the useEffect block, while it worked initially it's basically causing a loop render
   * and killed the tab after 3 clicks, I *think* a workround would be to attach that on app render
   * and pass top/left in but it's .... ugly code. redux might help though
   *
   * PLEASE PR THIS IF YOU HAVE A FIX THANKS
   */
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

  const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    /**
     * WELL SINCE I CAN'T SEEM TO DISABLE THE GHOST IMAGE IT'S A FEATURE NOW
     * PRs WELCOME
     */
    let transparentDragImage = new Image();
    transparentDragImage.src = '/image/transparent.png';
    e.dataTransfer.setDragImage(transparentDragImage, 0, 0);
  };

  const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.clientX !== 0 && e.clientY !== 0) {
      setTop(Math.floor(e.clientY - e.currentTarget.offsetHeight / 2));
      setLeft(Math.floor(e.clientX - e.currentTarget.offsetWidth / 2));
    }
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
      draggable={true}
      onDrag={onDragHandler}
      onDragStart={onDragStartHandler}
      aria-label={'Movable Bananyan Cat'}
    >
      <ImageContainer ref={bananyanRef} />
    </AbsolutePosContainer>
  ) : null;
};
