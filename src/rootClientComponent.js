import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';

export default (store, { routes, history }) => {
  const component = (
    <Router render={(props) => <ReduxAsyncConnect {...props} />} history={history}>
      {routes}
    </Router>
  );
  const root = (
    <Provider store={store} key="provider">
      {component}
    </Provider>
  );
  return Promise.resolve({ root });
};
