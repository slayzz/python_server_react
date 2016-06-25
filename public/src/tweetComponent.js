import React from 'react';
import { connect } from 'react-redux';
import actions from  './redux/actions';
import { bindActionCreators } from 'redux';



class Tweet extends React.Component{
    constructor(){
        super();
        this.state = {
            inputText: ''
        };
    }

    handleChange(e,clean){
        this.setState({
            inputText: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.buttomAction){
            this.buttomAction.value = '';
        }
        this.props.actions.addTodo(this.state.inputText);
    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Tweet"
                        ref={(ref) => this.buttomAction = ref}
                        value={this.state.inputText}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button  onClick={this.handleSubmit.bind(this)}>GoMan</button>
                </form>
                <ul>
                {
                    this.props.todos.map( todo =>{
                        return( <TweetItem key= {todo.id} todo={todo} actions = {this.props.actions} />);
                    })
                }
                </ul>
            </div>
        );
    }
}


class TweetItem extends React.Component {
    constructor(){
        super();
        this.state = {
            likeVal: null
        };
    }

    handleDelete(e){
        this.props.actions.deleteTweet(this.props.todo.id);
    }

    handleLike(e){
        this.props.actions.likeTweet(this.props.todo.id);
        this.setState({
            likeVal: !this.props.todo.liked ? 'button-like' : ''
        });
    }

    componentWillReceiveProps(){
    }
    componentWillUpdate(prop,state){

    }

    render(){
        console.log(this.props);
        return (
            <li>
                <div>{this.props.todo.text}</div>
                <button onClick={this.handleDelete.bind(this)} >Delete</button>
                <button onClick={this.handleLike.bind(this)} className={this.state.likeVal}>Like</button>
            </li>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
