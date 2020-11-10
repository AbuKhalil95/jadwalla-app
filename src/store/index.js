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
import allTemplates from './allTemplates';
import allSessions from './allSessions';


let reducers = combineReducers({auth, history, dashboard, chat, notifications, session, template, allTemplates, allSessions});

const rootReducer = (state, action) => {
  if (action.type === 'SET_LOGOUT') {
    state = null;
    window.location.href="/";
  }
  return reducers(state, action)
}

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();