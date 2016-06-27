import React from 'react';

class Profile extends React.Component{
    constructor() {
        super();
        this.state = {

        };
    }
    render(){
        return (
            <div className="person-profile-background">
                <div className="person-overlay">
                    <div className="person-profile-wrapper">
                        <a id="profile-picture"></a>
                        <a className="profile-name">
                            <span className="block-link">Einshtein</span>
                            <span className="block-link">@id1</span>
                        </a>
                        <div className="profile-label">
                            <a className="profile-button" href="">
                                Follow
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Buttons extends React.Component{
    constructor() {
        super();
        this.state = {

        };
    }
    render(){
        return (
            <div className="person-nav-menu">
                <nav className="menu-nav-bar">
                    <a className></a>
                    <a></a>
                    <a></a>
                </nav>
            </div>
        );
    }
}



export default class TopBar extends React.Component {
    constructor() {
         super();
         this.state = {

         };
    }

    render(){
        return(
            <div className="person-profile">
                <div>
                    <Profile />
                    <Buttons />
                </div>
            </div>
        );
    }
}


