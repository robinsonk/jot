import React, { Component } from 'react';
import './App.css';
import AppContext from '../../AppContext'
import { Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing'
import MainPage from '../MainPage/MainPage'
import Sidebar from '../Sidebar/Sidebar'
import FolderPage from '../FolderPage/FolderPage'
import NotePage from '../NotePage/NotePage'
import AddNote from '../AddNote/AddNote'
import AddFolder from '../AddFolder/AddFolder'

class App extends Component {

  state = {
    noteCards: [],
    folders: [],
    selectedFolder: null,
    selectedFolderName: '',
    selectedNotes: []
  }

  addFolder = (folder) => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    })
    console.log(this.state.folders)
  }

  deleteNote() {

  }

  handleSelectedFolder = (selectedId) => {
    for (let i = 0; i < this.state.folders.length; i ++) {
      console.log(this.state.folders[i].id)
        if (this.state.folders[i].id == selectedId) {
            this.setState({
              selectedFolder: selectedId,
              selectedFolderName: this.state.folders[i].name
            });
        }else {
          console.log('somethings broken')
        }
    }
  }

  handleSetState = () => {
    
  }

  render() {
    const contextValue = {
      noteCards: this.state.noteCards,
      folders: this.state.folders,
      selectedFolder: this.state.selectedFolder,
      selectedNotes: this.state.selectedNotes,
      selectedFolderName: this.state.selectedFolderName,
      handleSelectedFolder: this.handleSelectedFolder
    }

    return (
      <div className="app">
          <header role="banner">
            {/* <h1>
                Sup?
            </h1> */}
          </header>
          <main role="main">
          <AppContext.Provider value={contextValue}>
            <Switch>
              <Route
                exact path="/"
                component={Landing}
              />
              <Route
                component={Sidebar}
              />
            </Switch>
              <Route
                path="/mainpage"
                component={MainPage}
              />
              <Route
                path="/folders/:folderId"
                component={FolderPage}
              />
              <Route
                path="/notes/:noteId"
                component={NotePage}
              />
              <Route
                path="/addnote"
                component={AddNote}
              />
              <Route
                path="/addfolder"
                component={AddFolder}
              />
            </AppContext.Provider>
          </main>
      </div>
    );
  }
}

export default App;
