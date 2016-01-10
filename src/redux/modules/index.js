import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

const ingredientsQuery = (state = {}, { field }) => {
  return dispatch => {
    dispatch(requestFetch(field));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          'Water',
          'Milk',
          'Curd'
        ]);
      }, 100); // simulate server latency
    }).then(data =>
      (dispatch(requestRecieve(data, field))));
  };
};

export default combineReducers({
  ingredientsQuery: ingredientsQuery,
  routing: routeReducer
});
