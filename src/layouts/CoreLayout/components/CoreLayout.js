import React from 'react'
import Player from './Player'
import PlayerControls from './PlayerControls'
import StickyNav from './StickyNavBar'
import SearchBar from './FilterComponents/SearchBar'
import '../styles/CoreLayout.scss'
import '../../../styles/core.scss'

export const CoreLayout = (props) => (
  <div className='app'>
    <StickyNav>
      <SearchBar router={props.router}
        filter={props.filter}
        changeFilter={props.changeFilter} />
    </StickyNav>

    <div className='main-content'>
      {props.children}
    </div>

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
      playbackTime={props.playbackTime}
      shuffle={props.shuffle}
      loop={props.loop} />

    <Player currentStreamUrl={props.currentStreamUrl}
      changePlaybackTime={props.changePlaybackTime}
      isPaused={props.isPaused}
      changeVolume={props.changeVolume}
      volume={props.volume}
      isSeeking={props.isSeeking}
      playbackTime={props.playbackTime}
      playbackEnded={props.playbackEnded} />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
