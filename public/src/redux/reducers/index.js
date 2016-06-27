import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    todos: tweetReducer,
    users: userReducer
});

export default rootReducer;
