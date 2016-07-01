import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery'; //import Person from './components/person_component'
//import Tweet from './components/tweet_component';

import Header from './components/header_component';
import TopBar from './components/topbar_component';
import Main from './components/main_component';

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

$.ajax({
    ulr: '/',
    complete: (self, textStatus)=>{
        console.log(self);
        console.log(textStatus);
    },
    success: (data,second) =>{
        // console.log(data);
        // console.log(second);
    },
    error: (xhr, textStatus, er) => {
        console.log(textStatus);
        console.log(er);
    },
    dataType: 'application/json; charset=utf-8',
    type: 'POST',
    data: JSON.stringify({
        action: 'userRegister',
        username: 'siska',
        email: 'some@ouou.ru',
        fullName: 'some',
        pass: '12345'
    })
});

let store = configureStore();

ReactDOM.render(
    <div>
        <Header />
        <div className="all-content">
            <div className="rsp-container">
                    <TopBar />
                    <Main />
            </div>
        </div>
    </div>
    , document.getElementById('container')
);
// $.ajax({
//     ulr: '/',
//     complete: (self, textStatus)=>{
//         console.log(self);
//         console.log(textStatus);
//     },
//     success: (data,second) =>{
//         // console.log(data);
//         // console.log(second);
//     },
//     error: (xhr, textStatus, er) => {
//         console.log(textStatus);
//         console.log(er);
//     },
//     dataType: 'json',
//     type: 'POST',
//     data: {
//         action: 'userRegister',
//         username: 'siska',
//         email: 'some@ouou.ru',
//         fullName: 'some',
//         pass: '12345'
//     }
// });

//ReactDOM.render(
    //, document.getElementsByClassName('page-main-content')[0]
//);

