import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import NoteCard from '../NoteCard/NoteCard'
import './MainPage.css'

class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <h2>
                    I am the main note page!
                </h2>
                <NoteCard />

            </div>
        )
    }

}

export default MainPage