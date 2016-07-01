import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

// class Modal extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//
//         };
//     }
//
//     componentDidUpdate(){
//         console.log('Update Modal');
//         console.log(this.props);
//     }
//     render(){
//         return(
//             <div className="modal-window" style={this.props.display}>
//                 <p>Пиписька</p>
//             </div>
//         );
//     }
// }



export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {
        };
    }
    openRegister(e){
        this.props.dispatch(actions.modalShow({style: 'block', which: 'register', topic: 'Регистрация'}));
    }
    openLogin(e){
        this.props.dispatch(actions.modalShow({style: 'block', which: 'login', topic: 'Авторизация'}));
    }
    componentDidUpdate(){
        console.log('Update Heaader');
    }

    render(){
        return (
            <header className="page-header">
                <div className="topbar">
                    <div className="topbar-container">
                        <a href="/" className="icon-tasbar">Супер Ask</a>
                        <div className="topbar-right-user">
                            <a href="#" onClick={this.openRegister.bind(this)}>Зарегистрироваться</a>
                            <a href="#" onClick={this.openLogin.bind(this)}>Войти</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Header);
