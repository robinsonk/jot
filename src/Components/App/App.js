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
    folders: []
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

  addNoteCard() {

  }

  deleteNote() {

  }

  render() {
    const contextValue = {
      noteCards: this.state.noteCards,
      folders: this.state.folders,
      addFolder: this.addFolder
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
                path="/folderpage"
                component={FolderPage}
              />
              <Route
                path="/notepage"
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
