import React from 'react';
import styled from 'styled-components';
import { ITheme } from '../../constants';

const StyleButton = styled.button<{ theme: ITheme }>`
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.main};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  &:hover {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.secondary};
    outline: none;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  border: ${({ theme }) => `2px solid ${theme.main}`};
  border-radius: 4px;
`;

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyleButton onClick={onClick}>{children}</StyleButton>;
};
