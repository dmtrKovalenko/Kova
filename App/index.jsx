import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PlayerContainer from './components/PlayerContainer.jsx'
import TrackList from './components/TracksList.jsx';

const App = () => (
  <MuiThemeProvider>
    <PlayerContainer>
          <AppBar title="Title"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <TrackList/>
    </PlayerContainer>
  </MuiThemeProvider>
); 

ReactDOM.render(
  <App />,
  document.getElementById('app')
);