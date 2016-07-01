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
            cssStyleModal: {
                display: 'none'
            }
        };
    }
    openModal(){
        this.props.dispatch(actions.modalRegister('block'));
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
                            <a href="#" onClick={this.openModal.bind(this)}>Зарегистрироваться</a>
                            <a href="#">Войти</a>
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
