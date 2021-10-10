import React, { createRef } from 'react';
import styled from 'styled-components';
import { FlexContainer } from './Container';
import { BananyanDimensions } from '../constants';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

/** doc says nay nay to ref forward of functional components */
export const Image = React.forwardRef<HTMLImageElement>((props, ref) => {
  return (
    <FlexContainer tabIndex={1} {...BananyanDimensions}>
      <StyledImage
        alt='bananyan cat'
        src='/image/goldenbananyan.png'
        ref={ref}
      />
    </FlexContainer>
  );
});

export class ImageContainer extends React.Component<{}, {}> {
  private imageRef = createRef<HTMLImageElement>();

  componentDidMount() {
    const node = this.imageRef.current!;
    node.focus();
  }

  focus() {
    const node = this.imageRef.current;
    node && node.focus();
  }

  render() {
    return (
      <FlexContainer tabIndex={1} {...BananyanDimensions}>
        <StyledImage
          alt='bananyan cat'
          src='./image/goldenbananyan.png'
          ref={this.imageRef}
        />
      </FlexContainer>
    );
  }
}
