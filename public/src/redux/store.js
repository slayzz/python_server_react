import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';


let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore);

let store = {
	modal :{
		displayModal: {
			display : 'none'
		},
	    which: 'none',
	    register: 'register'
	},
	some: {
		name : 'hello'
	}
};

export default function configureStore(store)
{
    return finalCreateStore(rootReducer, store);
}
