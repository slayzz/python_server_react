import React from 'react';
export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {

        };
    }
    render(){
        return (
            <header className="page-header">
                <div className="topbar">
                    <div className="topbar-container">
                        <a href="/" className="icon-tasbar">Супер Ask</a>
                        <div className="topbar-right-user">
                            <a href="#">Зарегистрироваться</a>
                            <a href="#">Войти</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
