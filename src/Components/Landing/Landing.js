import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="split left">

                </div>
                <div className="split right">
                    <div className="landing-content">
                        <h1 className="welcome-to">
                            Welcome to
                        </h1>
                        <h1 className="jot">
                            Jot.
                        </h1>
                        <p className="landing-p">
                            Jot is a simple note-taking app. <br /> 
                            To get started, let's make a new folder.
                        </p>
                            <Link to={'/addfolder'} className="Link">
                            <button className="button">
                                Let's do it!
                            </button>
                            </Link>
                    </div>
                    </div>
            </div>
        )
    }

}

export default Landing