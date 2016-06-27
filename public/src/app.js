import ReactDOM from 'react-dom';
import React from 'react';
//import Person from './components/person_component'
//import Tweet from './components/tweet_component';

import Header from './components/header_component';
import TopBar from './components/topbar_component';

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
    <div>
        <Header />
        <div className="all-content">
            <div className="rsp-container">
                <main className="page-main">
                    <TopBar />
                </main>
            </div>
        </div>
    </div>
    , document.getElementById('container')
);
//ReactDOM.render(
    //, document.getElementsByClassName('page-main-content')[0]
//);
