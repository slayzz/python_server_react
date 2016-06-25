import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';



class ImagePerson extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>Here is image</div>
        );
    }
}


class UserInfo extends React.Component{
    constructor(){
        super();
    }

    handleNewId(){
        this.props.createNewUserId();
    }

    handleFocus(e){
        console.log(e.target);
    }

    render(){
        return(
            <div>
                <div>username : {this.props.user.username}</div>
                <div>id : {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>UpdateRandom</button>
                <div ><p onMouseOver={this.handleFocus.bind(this)}>Some incredible Text</p></div>
            </div>
        );
    }
}


class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }


    loadImageFromServ(){
        $.ajax({
            url: 'lib/data/img.json',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount(){
        this.loadImageFromServ();
    }


    render() {
        return (
            <div>
                <UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId} />
                <ImagePerson photos={this.state.data} todos={this.props.todos}/>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

function mapStateToProps(state){
    return {
        user:  state.user
    };
}

export  default connect(mapStateToProps,mapDispatchToProps)(Person);
