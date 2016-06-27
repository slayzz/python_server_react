import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';


let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore);


export default function configureStore(initialState = {todos: [], users: []}){
    return finalCreateStore(rootReducer, initialState);
}
