import React from 'react';
import styled from 'styled-components';
import { CenterContainer, PageContainer } from '../Container';
import { PageText } from '../../constants';

interface PageProps {
  children?: React.ReactNode;
  headerText?: string;
  column?: boolean;
}

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

export const Page: React.FC<PageProps> = ({ headerText, children, column }) => (
  <PageContainer>
    <CenterContainer column={column}>
      <Title>{headerText}</Title>
      {children}
    </CenterContainer>
  </PageContainer>
);

export const SplashPage: React.FC = () => <Page headerText={PageText.SPLASH} />;
