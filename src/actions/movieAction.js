import API from '../utils/api';
import * as types from '../constants/actionTypes';
import ToastMessage from './../utils/ToastMessage';

const getMovieInfo = () => async (dispatch) => {
  dispatch({type: types.IS_LOADING});

  try {
    const apiUrl = `singlesearch/shows/?q=merlin&embed=episodes`;

    await API.get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: types.IS_COMPLETE});
          dispatch({
            type: types.GET_MOVIE_INFO,
            payload: response.data,
          });
        }
      })
      .catch((err) => {
        dispatch({type: types.IS_COMPLETE});

        if (err.response.status === 500) {
          const message = 'Something went wrong. Connection Error!';
          ToastMessage(message, 'error');
          setTimeout(function () {
            window.location.href = '/error-page';
          }, 1000);
        }

        dispatch({type: types.IS_COMPLETE});
      });
  } catch (err) {
    const message = 'Something went wrong. Connection Error!';
    ToastMessage(message, 'error');
    setTimeout(function () {
      window.location.href = '/error-page';
    }, 1000);
  }
};

export {getMovieInfo};
