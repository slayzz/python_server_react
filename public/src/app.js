import ReactDOM from 'react-dom';
import React from 'react';
import Person from './components/person_component'
import Tweet from './components/tweet_component';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

//let initialState = {
    //todos: [{
        //id: 0,
        //liked: false,
        //text: 'Test todo for demo, Man!'
    //}],
    //user: {
        //username: 'CoolMan',
        //id: 13
    //}
//};

let store = configureStore();

//ReactDOM.render(
    //<Provider store={store}>
        //<Person />
    //</Provider>
    //, document.getElementById('person-viewer')
//);
//ReactDOM.render(
    //<Provider store={store}>
        //<Tweet />
    //</Provider>
    //, document.getElementsByClassName('page-main-content')[0]
//);
