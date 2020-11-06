import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from './auth';
import history from './history';
import dashboard from './dashboard';
import chat from './chat';
import notifications from './notifications';
import session from './session';
import template from './template';


let reducers = combineReducers({auth, history, dashboard, chat, notifications, session, template});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();