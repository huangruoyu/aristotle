import 'babel-polyfill';
import React from 'react';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadAllGroupFromApi} from './actions/groupAction';


const store = configureStore();
store.dispatch(loadAllGroupFromApi());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
