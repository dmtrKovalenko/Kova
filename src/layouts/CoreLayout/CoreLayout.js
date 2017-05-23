import React from 'react'
import Player from './Player/PlayerContainer'
import PlayerControls from './PlayerControls/PlayerControlsContainer'
import Navbar from './Navbar/NavbarContainer'
import '../../styles/core.scss'

export const CoreLayout = (props) => (
  <div className='app'>
    <Navbar router={props.router} />

    <div className='main-content'>
      {props.children}
    </div>

    <PlayerControls />
    <Player />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  router: React.PropTypes.object
}

export default CoreLayout
