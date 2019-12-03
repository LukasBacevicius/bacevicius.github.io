import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset'
import theme from './theme';
import { stateProps } from './reducers';
import { isDarkMode } from './utils/theme';
import { setMode } from './actions/theme';
import Main from './containers/Main';
import { LightsOff } from './components/LightsOff';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  body {
    background: ${({ theme }) => theme.color('background')};
  }
`;

const App: FC = () => {
  const mode = useSelector(({ theme }: stateProps) => theme.mode);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme(mode)}>
      <>
        <Reset />
        <GlobalStyles />
        <LightsOff
          checked={isDarkMode(mode)}
          onClick={() => dispatch(setMode())}
        />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </>
    </ThemeProvider>
  )
};

export default App;
