import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';



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


class UsersInfo extends React.Component{
    constructor(){
        super();
    }

    handleNewId(){
        this.props.createNewUserId();
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h3>And this user info</h3>
                <p>Name : {this.props.user.first_name}</p>
                <p>Name : {this.props.user.second_name}</p>
                <button onClick={this.handleNewId.bind(this)}>UpdateRandom</button>
            </div>
        );
    }
}


class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            users: {
                data: []
            }
        };
    }


    loadAllUsers(){

        $.ajax({
            url: 'lib/data/person_info.json',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                this.setState ({
                    users: {
                        data
                    }
                });
                this.props.actions.setAllUsers(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        });

    }

    componentDidMount(){
        this.loadAllUsers();
        //setTimeout(() =>{
            //this.loadAllUsers();
        //},2000);
    }


    render() {
        return (
            <div>
            {
                this.props.users.map((data) => {
                    console.log(data);
                    return <UsersInfo user={data} createNewUserId={this.props.actions.createNewUserId} key={data.id} />;
                })
            }
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
        users:  state.users
    };
}

export  default connect(mapStateToProps,mapDispatchToProps)(Person);
