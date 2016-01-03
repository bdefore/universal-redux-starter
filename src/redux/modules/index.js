import { combineReducers } from 'redux';
import { routeReducer } from 'universal-redux/lib/redux-simple-router';

export default combineReducers({
  routing: routeReducer
});
