import React, { Component } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './FolderPage.css'
import NoteCard from '../NoteCard/NoteCard'
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
        console.log('long funciton ran')

        return (

            <AppContext.Consumer>
            {(context) => ( 
                <div className='note-container-folder'>
                         {selectedNotes.map(note => {
                        return (
                        <div className="note-card" key={note.id}>
                        <Link exact to={`/folders/${note.folderId}`}>
                            <h4>{note.folderName}</h4>
                        </Link>
                        <Link exact to={`notes/${note.id}`}>
                            <h3>{note.name}</h3>
                        </Link>
                            <p className="content">{note.content}</p>
                            <p className="date"> <Moment format="Do MMM YYYY">{note.date}</Moment></p>
                        </div>
                        )
                    }
                    )}
                </div>
            )}
            </AppContext.Consumer>

            // <div className="main-page">
            //     <h2>
            //         {this.context.selectedFolderName}
            //     </h2>
            //     <button className="new-note-button">
            //         <Link to='/addnote' className="button-add-note">
            //             + New Note
            //         </Link>
            //     </button>
            
            //     <NoteCard />

            // </div>
        )
    }

}

export default FolderPage