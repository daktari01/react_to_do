import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{
    constructor(props){
        super(props);
        this.message = "Hello from the Note component!";
    }
    render(props){
        // What's passed in the return represents what'll be injected in the DOM
        return(
            <div>
                <h1>{ this.message }</h1>
            </div>
        )
    }
}

Note.propTypes = {

}

export default Note;