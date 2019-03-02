import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoteCard from '../NoteCard/NoteCard'
import './MainPage.css'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainHeader: "All Notes"
        };
    }

    render() {
        return (
            <div className="main-page">
                <h2 className="page-title">
                    {this.state.mainHeader}
                </h2>
                <button className="new-note-button">
                    <Link to='/addnote'>
                        + New Note
                    </Link>
                </button>
                <NoteCard />

            </div>
        )
    }

}

export default MainPage