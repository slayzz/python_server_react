import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';


class ModalWindow extends React.Component{
    constructor(){
        super();

        this.state = {
            register:{
                display: 'none'
            },
            login:{
                display: 'none'
            }
        };
    }
    closeModal(e){
        // console.log(e.target);
        if (e.target.className === 'util-container' || e.target.className === 'util-close'){
            this.props.dispatch(actions.modalShow({style: 'none', which: 'none', topic: 'none'}));
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
                    <div className="util-center">
                        <div className="box-head">
                            <div className="box-title">
                                {this.props.modal.topic}
                            </div>
                            <a href="#" className="util-close" onClick={this.closeModal.bind(this)}>
                            </a>
                        </div>
                        <div className="box-body">
                            <h2 className="strike-throught">
                                <span>Вопрошашечки</span>
                            </h2>
                            <form id="sign-up-form" style={this.state.register}>
                                <div className="input-form-box" >
                                    <div className="input-form-padding">
                                        <input placeholder="Username" className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Password" className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Full Name" className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input placeholder="Email" className="input-form" type="text"/>
                                    </div>
                                </div>
                                <div className="simple-form-item">
                                    <input className="btn-primary-wide" type="submit"/>
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
                                {/*<h2 className="strike-throught-bot">
                                </h2>*/}
                                <div className="simple-form-item">
                                    <input className="btn-primary-wide" type="submit"/>
                                </div>

                            </form>
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
