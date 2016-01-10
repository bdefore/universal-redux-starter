export const ingredientsQuery = (state = {}) => {
  return dispatch => {
    dispatch(requestFetch());
    setTimeout(() => {
      dispatch(requestRecieve());
    }, 100);
  };
};

export const requestFetch = () =>
  ({type: 'REQUEST_FETCH'});

export const requestRecieve = () =>
  ({type: 'REQUEST_RECEIVE'});