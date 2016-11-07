import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayerContainer from './components/PlayerContainer.jsx'


const App = () => (
  <MuiThemeProvider>
    <PlayerContainer>
    </PlayerContainer>
  </MuiThemeProvider>
); 

ReactDOM.render(
  <App />,
  document.getElementById('app')
);