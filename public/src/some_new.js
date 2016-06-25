'use strict';
import React from 'react';
import {some} from './tweet';

class Some extends React.Component {
    constructor() {
        super();
        this.state = {
            cmon: 'some nice'
        };
    }
    render(){
        return (
            <div>
                <p>{this.state.cmon}</p>
            </div>
        );

    }
}
