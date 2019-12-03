import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import theme from '../theme';
import { stateProps } from '../reducers';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  body {
    background: ${({ theme }) => theme.color('background')};
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #root {
    flex: 1;
  }
`;

const StylesBootstrap: FC = ({ children }) => {
  const mode = useSelector(({ theme }: stateProps) => theme.mode);

  return (
    <ThemeProvider theme={theme(mode)}>
      <>
        <Reset />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
};

export default StylesBootstrap;