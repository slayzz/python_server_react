import React from 'react';

class ItemOfBand extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return (
            <div className="stream-item">
                <h1 className="stream-item-content stream-item-question">Какой у тебя нос?</h1>
                <p className="stream-item-content stream-item-answer">Ты даже представить себе не можешь, жалкий человечишка</p>
                <div className="stream-item-content stream-item-footer">
                    <a className="stream-item-link-a" href="#">September 03, 2015 19:31:29 GMT</a>
                </div>
                {/*<div className="stream-item-content tstream-item-link">
                </div>*/}
                <div className="stream-item-content stream-item-options">
                    <div className="like-button">
                        <a className="icon-like" href="#">
                        </a>
                        <a className="counter" href="#">
                            150
                        </a>
                    </div>
                </div>

            </div>
        );

    }
}

class MainBand extends React.Component{
    constructor(){
        super();
        this.state = {
        };
    }

    render(){
        return(
            <div className="main-content">
                <div className="item-pager">
                    <ItemOfBand />
                </div>
            </div>
        );
    }
}


export default class BodyPage extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <MainBand />
        );
    }



}
