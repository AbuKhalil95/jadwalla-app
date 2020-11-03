import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from './auth';
import schedule from './schedule';
import dashboard from './dashboard';
import chat from './chat';
import notifications from './notifications';


let reducers = combineReducers({auth, schedule, dashboard, chat, notifications});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();