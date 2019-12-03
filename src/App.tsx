import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-awesome-styled-grid';
import { stateProps } from './reducers';
import { isDarkMode } from './utils/theme';
import { setMode } from './actions/theme';
import Main from './containers/Main';
import { LightsOff } from './components/LightsOff';
import PageWrapper from './components/PageWrapper';
import StylesBootstrap from './styles/bootstrap';

const App: FC = () => {
  /* 
    TODO: Create navigation container and move this there
  */
  const mode = useSelector(({ theme }: stateProps) => theme.mode);
  const dispatch = useDispatch();

  return (
    <StylesBootstrap>
      {/* TEMP */}
      <Container>
        <LightsOff
          checked={isDarkMode(mode)}
          onClick={() => dispatch(setMode())}
        />
      </Container>
      {/* END TEMP */}
      <PageWrapper>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </PageWrapper>
    </StylesBootstrap>
  )
};

export default App;
