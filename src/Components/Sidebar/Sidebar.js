import React, { Component } from 'react'
import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import { stack as Menu } from "react-burger-menu";
import AppContext from '../../AppContext';

class Sidebar extends Component {

    static contextType = AppContext

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
                                <NavLink to={`/folder/${folder.id}`}
                                    className="folder-list-item"
                                    activeClassName="folder-list-item-active"
                                    key={folder.id}
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
                                acticeClassName="folderName-active"
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