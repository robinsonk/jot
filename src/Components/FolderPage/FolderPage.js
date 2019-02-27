import React, { Component } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

class FolderPage extends Component {
    render() {
        return (
            <Fragment>
                <h2>
                    I am a folder page!
                </h2>
                <h3>
                    <Link to={'/notepage'}>
                    click me to go to a single note page
                    </Link>
                </h3>

            </Fragment>
        )
    }

}

export default FolderPage