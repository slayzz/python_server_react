import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    modal: modalReducer
});

export default rootReducer;
