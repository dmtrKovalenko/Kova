import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayerContainer from './components/PlayerContainer.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

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