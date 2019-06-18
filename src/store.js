import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import Member from './reducers/Member';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';

export const history = createBrowserHistory();

export const store = createStore(combineReducers({
  Member,
  form: formReducer,
  router: connectRouter(history),
}), {}, applyMiddleware(routerMiddleware(history)));

console.log(store.getState())
