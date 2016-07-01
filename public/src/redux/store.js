import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';


let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore);

let modal = {
	displayModal: {
		display : 'none'
	},
    which: 'none',
    register: 'register'
};

export default function configureStore(modal)
{
    return finalCreateStore(rootReducer, modal);
}
