import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import getRoutes from './routes';

export default (store, providers, devComponent) => {
  const component = (
    <Router render={(props) => <ReduxAsyncConnect {...props} />} history={browserHistory}>
      {getRoutes(store)}
    </Router>
  );
  const root = (
    <Provider store={store} key="provider">
      <div>
        {component}
        {devComponent}
      </div>
    </Provider>
  );
  return Promise.resolve(root);
};
