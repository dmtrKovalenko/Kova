import React from 'react'
import AppBar from 'material-ui/AppBar'
import Player from './Player'
import PlayerControls from './PlayerControls'
import '../styles/CoreLayout.scss'
import '../../../styles/core.scss'

export const CoreLayout = (props) => (
   <div className="app">
      <AppBar title="Kova"/>

      {props.children}

      <PlayerControls currentSong={props.currentSong}
                      isPlaying={props.isPlaying}
                      isPaused={props.isPaused}
                      playPause={props.playPause}
                      playNextSong={props.playNextSong}
                      playPreviousSong={props.playPreviousSong}
                      changeVolume={props.changeVolume}
                      volume={props.volume} 
                      seekStarted={props.seekStarted}
                      seek={props.seek}
                      seeked={props.seeked}
                      playbackTime={props.playbackTime}/>

      <Player currentSongId={props.currentSongId}
              changePlaybackTime={props.changePlaybackTime}
              isPaused={props.isPaused}
              changeVolume={props.changeVolume}
              volume={props.volume}
              isSeeking={props.isSeeking}
              playbackTime={props.playbackTime}/>
   </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
