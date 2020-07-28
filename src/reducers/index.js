import {combineReducers} from 'redux';
import loaderReducer from './loaderReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  movie: movieReducer,
});

export default rootReducer;
