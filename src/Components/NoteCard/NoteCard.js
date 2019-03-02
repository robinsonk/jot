import React, { Component } from 'react'
import AppContext from '../../AppContext';
import './NoteCard.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

class NoteCard extends Component {

    static contextType = AppContext

    render() {

        const filteredNotes = []; 
        this.context.noteCards.map(note => {
            if (note.name.length > 0 && note.content.length > 0 && note.folderId > 0) {
                 filteredNotes.push(note)
                 return filteredNotes;
            }
        })

        return (
            <AppContext.Consumer>
            {(context) => ( 
                <div className='main-note-container'>
                         {filteredNotes.map(note => {
                        return (
                        <div className="note-card" key={note.id}>
                        <Link exact to={`folders/${note.folderId}`} className="folder-name-link">
                            <h4>{note.folderName}</h4>
                        </Link>
                            <h3 className="note-name-link">{note.name}</h3>
                            <p className="card-content">{note.content}</p>
                            <p className="date"> <Moment format="Do MMM YYYY">{note.date}</Moment></p>
                        </div>
                        )
                    }
                    )}
                </div>
            )}
            </AppContext.Consumer>
        )
    }
}

export default NoteCard;