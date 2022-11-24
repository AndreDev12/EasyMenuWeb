import { ThemeProvider } from '@emotion/react';
import { Layout } from '@gamiui/standard';
import * as React from 'react';
import { Header, Footer } from '..';
import * as S from './styles';

export interface ILayoutWrapper {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: ILayoutWrapper) => {
  return (
    <Layout>
      <ThemeProvider>
        <S.LayoutHeader>
          <Header />
        </S.LayoutHeader>
        <S.Content>{children}</S.Content>
      </ThemeProvider>
    </Layout>
  );
};
