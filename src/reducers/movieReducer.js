import * as types from '../constants/actionTypes';
const initialState = {
  singleMovieInfo: []
};

const movieReducer = (state = initialState, action) => {
    let {type, payload} = action;

  switch (type) {
    case types.GET_MOVIE_INFO:
      return {
        ...state,
        singleMovieInfo: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
