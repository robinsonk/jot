import React, { Component } from 'react'
import './Dropdown.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AppContext from '../../AppContext';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            headerTitle: "Select a folder",
            ulClassName: "dropdown-list-hide"
        };
    }

    static contextType = AppContext

    handleClickOuter = () => {
        this.setState({
            isOpen: false
        });
    }

    handleSetFolder = () => {
        const folderName = this.state.headerTitle;
        this.props.updateFolderId(folderName)
    }

    toggleDropdown = () => {
        console.log('dropdown called')
        console.log(this.state.headerTitle)
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
        if (this.state.isOpen === false) {
            this.setState({
                ulClassName: "dropdown-list"
            })
        } else {
            this.setState({
                ulClassName: "dropdown-list-hide"
            })
        }
        
    }

    changeHeader = (e) => {
        this.setState({
            headerTitle: e.target.id
        }, function() {
            this.handleSetFolder();
        });
    }


    render() {
        return (
            <div className="dropdown-wrapper">
                <div className="dropdown-header"
                    onClick={() => this.toggleDropdown()}
                >
                    <p className="dropdown-title">{this.state.headerTitle}</p> <span><FontAwesomeIcon icon="chevron-down" className="chevron-down"/></span>
                </div>
                
                <ul className={this.state.ulClassName} onClick={() => this.toggleDropdown()}>
                {this.props.folders.map(folder => 
                <div key={folder.id}>
                    <li key={folder.id} className="dropdown-list-item" id={folder.name} onClick={(e) => this.changeHeader(e)}>{folder.name}</li>
                </div>
                )}
                </ul>
            </div>
        )
    }

}

library.add(faChevronDown)
export default Dropdown