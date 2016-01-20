import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

export default combineReducers({
  reduxAsyncConnect,
  routing: routeReducer
});
