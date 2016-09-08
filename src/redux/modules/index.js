import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'fmp-redux-async-connect';

export default combineReducers({
  reduxAsyncConnect,
  routing: routeReducer
});
