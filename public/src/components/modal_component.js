import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import $ from 'jquery';


class ModalWindow extends React.Component{
    constructor(){
        super();

        this.state = {
            register:{
                display: 'none'
            },
            login:{
                display: 'none'
            },
            warning:{
                style:
                {
                    display:'none'
                },
                message: ''
            },
            warningElement: document.querySelector('.warning')
        };
    }
    closeModal(e){
        if (e.target.className === 'util-container' || e.target.className === 'util-close'){
            this.props.dispatch(actions.modalShow({style: 'none', which: 'none', topic: 'none'}));
        }
    }

    registerUser(e){
        // console.log(e.form);
        e.preventDefault();
        let pWarn = document.createElement('p');
        pWarn.className = 'all-text-animation';
        let userRegLabel = {};

        (
            {
                username: userRegLabel.username,
                password: userRegLabel.password,
                fullName: userRegLabel.fullName,
                email: userRegLabel.email
            } = this.formRegister.elements
        );

        let pass = Object.keys(userRegLabel).every((item) =>{
            return userRegLabel[item].value ? true : false;
        });

        //Проверяем все ли поля запонены, если же нет делаем анимацию
        if (!pass){
            let textWarn = document.querySelector('.text-animation')|| document.querySelector('.text-animation-blink') ;
            if (textWarn){
                let cloneWarn = textWarn.cloneNode(true);
                textWarn.remove();
                this.warningDiv.appendChild(cloneWarn);
                cloneWarn.classList.add('all-text-animation');
                cloneWarn.classList.add('text-animation-blink');
                return;
            }

            pWarn.className += ' text-animation';
            pWarn.innerHTML =`Все поля должны быть заполнены`;
            document.querySelector('.warning').appendChild(pWarn);
            this.warningDiv.appendChild(pWarn);
        }

    }


    componentWillReceiveProps(nextProps){
        //Какой окно октрыть, выбираем, в зависимости от параметров
        switch (nextProps.modal.which){
            case 'register':
                this.setState({
                    register:{
                        display: 'block'
                    }
                });
                break;
            case 'login':
                this.setState({
                    login:{
                        display: 'block'
                    }
                });
                break;
            default:
                this.setState({
                    register:{
                        display: 'none'
                    },
                    login:{
                        display: 'none'
                    }
                });
                break;
        }
    }

    render(){

        return (
            <div className="modal-window"  style={this.props.modal.displayModal}>
                <div className="util-container" onClick={this.closeModal.bind(this)}>
                    <div className="util-center" >
                        <div className="box-head">
                            <div className="box-title">
                                {this.props.modal.topic}
                            </div>
                            <a href="#" className="util-close" onClick={this.closeModal.bind(this)}> </a>
                        </div>
                        <div className="box-body"id="main-modal">
                            <h2 className="strike-throught">
                                <span>Вопрошашечки</span>
                            </h2>
                            <form id="sign-up-form"onSubmit={this.registerUser.bind(this)} style={this.state.register} ref={(e)=>{this.formRegister = e;}} >
                                <div className="input-form-box" >
                                    <div className="input-form-padding">
                                        <input placeholder="Username" className="input-form" type="text" name="username"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Password" className="input-form" type="text" name="password"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Full Name" className="input-form" type="text" name="fullName"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Email" className="input-form" type="text" name="email"/>
                                    </div>
                                </div>
                                <div className="simple-form-item">
                                    <input className="btn-primary-wide" type="submit" />
                                </div>
                            </form>
                            <form id="sign-up-form" style={this.state.login}>
                                <div className="input-form-box">
                                    <div className="input-form-padding">
                                        <input placeholder="Username" className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Password" className="input-form" type="text"/>
                                    </div>
                                </div>
                                <div className="simple-form-item">
                                    <input className="btn-primary-wide" type="submit"/>
                                </div>

                            </form>
                            <div className="warning" ref={(e)=>this.warningDiv = e}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(ModalWindow);
