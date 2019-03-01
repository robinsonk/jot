import React, { Component } from 'react'
import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import { stack as Menu } from "react-burger-menu";
import AppContext from '../../AppContext';
import { Route, Switch } from 'react-router-dom'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedFolder: ''
        };
    }

    static contextType = AppContext

    handleClick = (event) => {

        // for (let i = 0; i < this.context.folders.length; i++) {
        //     if (this.context.folders[i].id === )
        // }
        // event.preventDefault();
        // this.setState({
        //     clickedFolder: e.target.key
        // }
        // , function() {
        //     this.context.handleSelectedFolder()
        // }
        // )

        const selectedId = event.target.id;
        this.context.handleSelectedFolder(selectedId);
    }

    render() {
        return (
            <AppContext.Consumer>
                {(context) => (
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
                                {this.context.folders.map(folder => 
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
                            {this.context.folders.map(folder => 
                            <NavLink to={`/folder/${folder.id}`}
                                className="menu-item"
                                activeClassName="folderName-active"
                                key={folder.id}
                            >
                                {folder.name}
                                <br />
                            </NavLink>
                            )}
                    </Menu>
                </div>
                )}
            </AppContext.Consumer>
        )
    }

}

export default Sidebar