import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: '',
        };
    }
    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Write a note ..."
                value={this.state.newNoteContent} />
                <button className="noteButton">Add Note</button>
            </div>
        );
    }
}
export default NoteForm;