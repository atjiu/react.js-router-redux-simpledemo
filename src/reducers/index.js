import {combineReducers} from 'redux';

import app from './app';
import detail from './detail';

export default combineReducers({
  app,
  detail,
})