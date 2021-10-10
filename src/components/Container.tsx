import styled from 'styled-components';
import { ITheme } from '../constants';

export const Container = styled.div<{ theme: ITheme }>`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.main};
  overflow: hidden;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  &:focus {
    outline: none;
  }
`;

export const CenterContainer = styled(FlexContainer)<{
  column?: boolean;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  cheatMode?: boolean;
  theme: ITheme;
}>`
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  ${({ minWidth }) => notNullOrUndefined(minWidth) && `min-width: ${minWidth}`};
  ${({ minHeight }) =>
    notNullOrUndefined(minHeight) && `min-height: ${minHeight}`};
  ${({ width }) => notNullOrUndefined(width) && `width: ${width}`};
  ${({ height }) => notNullOrUndefined(height) && `height: ${height}`};
  border: ${({ cheatMode, theme }) =>
    cheatMode ? `2px solid ${theme.main}` : 'none'};
`;

export const AppContainer = styled(CenterContainer)`
  flex-direction: column;
  width: 95vw;
  height: 95vh;
  min-width: 200px;
  min-height: 200px;
`;

export const PageContainer = styled(CenterContainer)`
  width: 100%;
  height: 60%;
`;

export const ButtonGroupContainer = styled(CenterContainer)`
  width: 100%;
  height: 20%;
`;

export const AbsolutePosContainer = styled(Container)<{
  column?: boolean;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  cheatMode?: boolean;
  theme: ITheme;
}>`
  position: absolute;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  border: ${({ cheatMode, theme }) =>
    cheatMode ? `2px solid ${theme.main}` : 'none'};
  ${({ left }) => notNullOrUndefined(left) && `left: ${left}px`};
  ${({ right }) => notNullOrUndefined(right) && `right: ${right}px`};
  ${({ top }) => notNullOrUndefined(top) && `top: ${top}px`};
  ${({ bottom }) => notNullOrUndefined(bottom) && `bottom: ${bottom}px`};
  ${({ minWidth }) => notNullOrUndefined(minWidth) && `min-width: ${minWidth}`};
  ${({ minHeight }) =>
    notNullOrUndefined(minHeight) && `min-height: ${minHeight}`};
  ${({ width }) => notNullOrUndefined(width) && `width: ${width}`};
  ${({ height }) => notNullOrUndefined(height) && `height: ${height}`};
`;

const notNullOrUndefined = (input: any) =>
  input !== null && input !== undefined;
