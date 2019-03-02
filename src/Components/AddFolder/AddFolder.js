import React, { Component } from 'react'
import './AddFolder.css'
import { Link } from 'react-router-dom'
import AppContext from '../../AppContext';

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            folderName: '',
        }
    }

    static contextType = AppContext;

    updateFolderName = (folderName) => {
        console.log("updateFolderName function has been called");
        this.setState({folderName})
    }

    handleSubmit = (event) => {
        console.log('handleSubmit function has been called');
        const folder = {
            name: this.state.folderName,
            id: Math.floor(Math.random() * 1000000)
        }
        this.context.folders.push(folder)
        console.log(this.context.folders);
        if (folder.name.length < 1) {
            event.preventDefault();
            alert("Please create a name for this folder");
        }
    }

    render() {
        return (
                <div className="add-folder-container">
                    <h2>
                        Create a folder
                    </h2>
                    <p>
                        Name your folder and save it.
                    </p>
                    <form onChange={(event) => this.updateFolderName(event.target.value)}>
                        <label className="folder-name-label">Folder name:</label><br />
                        <input className="folder-name-input" type="text" placeholder="folder name here"/>
                        <Link to="/addnote">
                            <button className="submit-folder" type="submit" 
                                onClick={(event) => this.handleSubmit(event)}>
                                    Save 
                            </button>
                        </Link>
                    </form>
                </div>
        )
    }

}

export default AddFolder