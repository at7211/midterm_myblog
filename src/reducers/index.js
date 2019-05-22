import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Member from './Member.js';

export default combineReducers({
  Member,
  form: formReducer,
});
