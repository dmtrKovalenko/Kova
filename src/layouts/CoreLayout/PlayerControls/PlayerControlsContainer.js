import { connect } from 'react-redux'
import * as actions from '../../../player-module/player-actions'

import ControlsComponent from './components/PlayerControls'

const mapDispatchToProps = {
  playPause : (isPaused) => isPaused ? actions.play() : actions.pause(),
  changePlaybackTime : actions.changePlaybackTime,
  playNextSong : actions.playNextSong,
  playPreviousSong : actions.playPreviousSong,
  changeVolume : actions.changeVolume,
  seekStarted: actions.seekStarted,
  seek: actions.seek,
  seeked: actions.seeked,
  loop: actions.loop,
  shuffle: actions.shuffle,
  playbackEnded: actions.playbackEnded,
  changeFilter: actions.changeFilter
}

const mapStateToProps = (state) => ({
  currentSongId: state.player.currentSongId,
  filter: state.player.filter,
  currentStreamUrl: state.player.currentStreamUrl,
  isPaused : state.player.isPaused,
  isPlaying: state.player.isPlaying,
  volume : state.player.volume,
  isSeeking: state.player.isSeeking,
  playbackTime: state.player.playbackTime,
  currentSong: state.player.playList
        ? state.player.playList.find(song => song.id === state.player.currentSongId)
        : null
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlsComponent)
