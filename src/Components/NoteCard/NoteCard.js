import React, { Component, Fragment} from 'react'
import AppContext from '../../AppContext';
import './NoteCard.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

class NoteCard extends Component {

    static contextType = AppContext

    render() {
        return (
            <AppContext.Consumer>
            {(context) => (
                <div className='note-container'>
                    {this.context.noteCards.map(note => {
                        return (
                        <div className="note-card" key={note.id}>
                        <Link to={`folder/${note.folderId}`}>
                            <h4>{note.folderName}</h4>
                        </Link>
                        <Link to={`notes/${note.id}`}>
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
        )
    }
}

export default NoteCard;