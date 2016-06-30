import React from 'react';

class Register extends React.Component{
    constructor() {
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <a href="#" onClick={this.openModal}>Зарегистрироваться</a>
                <div style={{display: 'none'}}>
                    <p>Hello man</p>
                </div>
            </div>
        );
    }
}



export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {

        };
    }
    openModal(){
        console.log('LOL');
    }


    render(){
        return (
            <header className="page-header">
                <div className="topbar">
                    <div className="topbar-container">
                        <a href="/" className="icon-tasbar">Супер Ask</a>
                        <div className="topbar-right-user">
                            <Register onClick={this.openModal}/>
                            <a href="#">Войти</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
