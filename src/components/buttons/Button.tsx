import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  font-family: 'Roboto', sans-serif;
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  &:hover {
    background: palevioletred;
    color: white;
  }
  border: 2px solid palevioletred;
  border-radius: 4px;
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyleButton onClick={onClick}>{children}</StyleButton>;
};
