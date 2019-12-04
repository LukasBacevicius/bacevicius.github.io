import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import Main from './containers/Main';
import Navigation from './containers/Navigation';
import StylesBootstrap from './styles/bootstrap';

const App: FC = () => (
  <StylesBootstrap>
    <Navigation />
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </StylesBootstrap>
);

export default App;
