import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import ReactGA from 'react-ga';
import history from './history';
import store from './store';
import App from './App';

ReactGA.initialize('UA-164199624-1');
ReactGA.pageview(window.location.pathname + window.location.search);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);