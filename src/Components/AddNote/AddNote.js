import React, { Component } from 'react'
import './AddNote.css'
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import AppContext from '../../AppContext';

class AddNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteName: '',
            content: '',
            folderId: '',
        }
    }

    static contextType = AppContext;

    updateNoteName = (noteName) => {
        console.log("updateNoterName function has been called");
        this.setState({noteName}, function() {
            console.log(this.state.noteName)
        })
    }

    updateNoteContent = (content) => {
        console.log("updateNoteContent function has been called");
        this.setState({content})
    }

    updateFolderId = (folderName) => {
        console.log("updateNoterName function has been called");
        for (let i = 0; i < this.context.folders.length; i++) {
            if (folderName === this.context.folders[i].name) {
                const selectedFolderId = this.context.folders[i].id;
                this.setState({folderId: selectedFolderId})
            }
        }
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        console.log('handleSubmit function has been called');
        const note = {
            name: this.state.noteName,
            id: Math.floor(Math.random() * 1000000),
            folderId: this.state.folderId,
            content: this.state.content,
            date: new Date(),
        }
        console.log(note);
        this.context.noteCards.push(note)
        console.log(this.context.noteCards);
    }

    render() {
        return (
                <div className="add-folder-container">
                    <h2 className="note-page-header">
                        Create a note
                    </h2>
                    <p>
                        Create your new note and save it to your folder.
                    </p>
                    <form>
                        <label className="note-name-label">Note name:</label><br />
                            <textarea className="folder-name-input" type="text" placeholder="note name here"
                                onChange={(event) => this.updateNoteName(event.target.value)}
                            />
                        <Dropdown 
                            folders={this.context.folders}
                            updateFolderId={this.updateFolderId}
                        />
                        <label className="note-content-label">Note content:</label><br />
                            <textarea className="note-content-input" type="text" placeholder="note content here"
                                onChange={(event) => this.updateNoteContent(event.target.value)}
                            />
                        <Link to="/mainpage">
                            <button className="submit-folder" type="submit"
                                onClick={(event) => this.handleSubmit(event)}
                            >Save </button>
                        </Link>
                    </form>
                </div>
        )
    }

}

export default AddNote