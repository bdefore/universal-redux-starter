import React from 'react';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';

export default (store, renderProps) => {
  return new Promise((resolve, reject) => {
    loadOnServer(renderProps, store)
      .then(() => {
        const root = (
          <Provider store={store} key="provider">;
            <div>
              <ReduxAsyncConnect {...renderProps} />
            </div>
          </Provider>
        );
        resolve(root);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
