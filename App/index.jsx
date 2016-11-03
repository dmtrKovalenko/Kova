import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PlayerContainer from './components/PlayerContainer.jsx'

const App = () => (
  <PlayerContainer>
    <MuiThemeProvider>
        <AppBar title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    </MuiThemeProvider>
  </PlayerContainer>
); 

ReactDOM.render(
  <App />,
  document.getElementById('app')
);