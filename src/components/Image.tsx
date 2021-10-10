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

export const Image = React.forwardRef<HTMLImageElement>((props, ref) => {
  return (
    <FlexContainer tabIndex={1} {...BananyanDimensions}>
      <StyledImage
        alt='bananyan cat'
        src='/image/goldenbananyan.png'
        ref={ref}
        onFocus={() => console.log('mama has focus')}
      />
    </FlexContainer>
  );
});

export class ImageContainer extends React.PureComponent<{}, {}> {
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
          src='/image/goldenbananyan.png'
          ref={this.imageRef}
          onFocus={() => console.log('mama has focus')}
        />
      </FlexContainer>
    );
  }
}
