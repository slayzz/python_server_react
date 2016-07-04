import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
 //import Person from './components/person_component'
//import Tweet from './components/tweet_component';

import Header from './components/header_component';
import TopBar from './components/topbar_component';
import Main from './components/main_component';
import Modal from './components/modal_component';

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

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header />
            <div className="all-content">
                <div className="rsp-container">
                        <TopBar />
                        <Main />
                </div>
            </div>
            <Modal />
        </div>
    </Provider>
    , document.getElementById('container')
);
