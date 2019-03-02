import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FolderPage.css'
import AppContext from '../../AppContext';
import Moment from 'react-moment';

class FolderPage extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = AppContext

    render() {
        const selectedNotes = [];

        for (let i = 0; i < this.context.noteCards.length; i++) {
            if (this.context.noteCards[i].folderId == this.context.selectedFolder) {
                selectedNotes.push(this.context.noteCards[i]);
            } 
            else if (this.context.selectedFolder == null) {
                selectedNotes.push(this.context.noteCards)
            }
        }

        const filteredNotes = []; 
        selectedNotes.map(note => {
            if (note.name.length > 0 && note.content.length > 0 && note.folderId > 0) {
                filteredNotes.push(note)
            }
        })

        let folderName;
        if (filteredNotes.length == 0) {
                folderName = "This folder is empty! Please add a note."
            }
        else {filteredNotes.map(note => {
                folderName = note.folderName
            })
        }

        return (
                <div className="main-page">
                        <div className='folder-page'>
                            <h2 className="page-title">
                                {folderName}
                            </h2>
                            <button className="new-note-button">
                                <Link to='/addnote'>
                                    + New Note
                                </Link>
                            </button>
                            <div className="container">
                            {filteredNotes.map(note => {
                                return (
                            <div className='note-container-folder'>
                                    <div className="note-card" key={note.id}>
                                        <Link exact to={`folders/${note.folderId}`} className='folder-link'>
                                            <h4>{note.folderName}</h4>
                                        </Link>
                                        <h3 className="note-name-link">{note.name}</h3>
                                        <p className="card-content">{note.content}</p>
                                        <p className="date"> <Moment format="Do MMM YYYY">{note.date}</Moment></p>
                                    </div>
                            </div>
                              )
                            }
                            )}
                            </div>
                        </div>
                </div>
        )
    }

}

export default FolderPage