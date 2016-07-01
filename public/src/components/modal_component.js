import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';


class ModalWindow extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    componentWillReceiveProps(nextProps){
        console.log('LOL Modal get props');
        console.log(nextProps);
    }

    render(){
        console.log(this.props);

        return (
            <div className="modal-window" style={this.props.modal.displayStyle}>
                <div className="util-container">
                    <div className="util-center">
                        <div className="box-head">
                            <div className="box-title">
                                Регистрация
                            </div>
                            <a href="#" className="util-close">
                            </a>
                        </div>
                        <div className="box-body">
                            <form id="sign-up-form">
                                <div className="input-form-box">
                                    <div className="input-form-padding">
                                        <input className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input className="input-form" type="text"/>
                                    </div>
                                    <div className="input-form-padding">
                                        <input className="input-form" type="text"/>
                                    </div>
                                </div>
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
