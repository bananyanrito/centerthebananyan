import React from 'react';
import styled from 'styled-components';
import { CenterContainer, PageContainer } from '../Container';
import { ITheme } from '../../constants';

interface PageProps {
  children?: React.ReactNode;
  headerText?: string;
  column?: boolean;
}

const Title = styled.h1<{ theme: ITheme }>`
  font-size: 2em;
  text-align: center;
  color: ${({ theme }) => theme.main};
`;

export const Page: React.FC<PageProps> = ({ headerText, children, column }) => (
  <PageContainer>
    <CenterContainer column={column}>
      <Title>{headerText}</Title>
      {children}
    </CenterContainer>
  </PageContainer>
);
