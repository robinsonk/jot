import React, { Component } from 'react'
import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import { stack as Menu } from "react-burger-menu";
import AppContext from '../../AppContext';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedFolder: ''
        };
    }

    static contextType = AppContext

    handleClick = (event) => {
        const selectedId = event.target.id;
        this.context.handleSelectedFolder(selectedId);
    }

    render() {

        const filteredFolders = []; 
        this.context.folders.map(folder => {
            if (folder.name.length > 0) {
                filteredFolders.push(folder)
            }
        })

        return (
            <div className="sidebar">
                <div className="sidebar-web">
                    <Link to="/mainpage" className="home-link">
                        <h2 className="sidebar-header">
                            JOT.
                        </h2>
                    </Link>
                    <Link to="/addfolder">
                        <button className="new-folder-button">
                            + New Folder
                        </button>
                    </Link>
                    <div className="folder-list">
                        <p className="folder-nav-header"> MY FOLDERS </p>
                        <ul className="folder-list-ul">
                            {filteredFolders.map(folder =>
                                <NavLink to={`/folders/${folder.id}`}
                                    className="folder-list-item"
                                    activeClassName="folder-list-item-active"
                                    id={folder.id}
                                    key={folder.id}
                                    onClick={(event) => this.handleClick(event)}
                                >
                                    {folder.name}
                                </NavLink>
                            )}
                        </ul>
                    </div>
                </div>
                <Menu
                    noOverlay
                    className="mobile-menu"
                >
                    <Link to="/mainpage" className="home-link">
                        <h2 className="sidebar-header">
                            JOT.
                        </h2>
                    </Link>
                    <Link to="/addfolder">
                        <button className="new-folder-button">
                            + New Folder
                        </button>
                    </Link>
                    <ul>
                    {filteredFolders.map(folder =>
                        <NavLink exact to={`/folders/${folder.id}`}
                            className="menu-item"
                            activeClassName="folderName-active"
                            id={folder.id}
                            key={folder.id}
                            onClick={(event) => this.handleClick(event)}
                        >
                            {folder.name}
                            <br />
                        </NavLink>
                    )}
                    </ul>
                </Menu>
            </div>
        )
    }

}

export default Sidebar