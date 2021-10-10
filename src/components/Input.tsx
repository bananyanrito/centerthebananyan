import styled from 'styled-components';
import { ITheme } from '../constants';

export const Input = styled.input<{ theme: ITheme }>`
  border: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.main}`};
  &:focus {
    outline: none;
  }
  width: 100%;
  padding: 0.5em;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.main};
  font-size: 1em;
`;
