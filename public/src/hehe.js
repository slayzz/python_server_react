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
