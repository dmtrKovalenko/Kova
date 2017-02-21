import { connect } from 'react-redux'
import * as actions from '../../../player-module/player-actions'

import PlayerComponent from './components/Player'

const mapDispatchToProps = {
  playPause : (isPaused) => isPaused ? actions.play() : actions.pause(),
  changePlaybackTime : actions.changePlaybackTime,
  playbackEnded: actions.playbackEnded,
  changeVolume : actions.changeVolume
}

const mapStateToProps = (state) => ({
  currentStreamUrl: state.player.currentStreamUrl,
  isPaused : state.player.isPaused,
  volume : state.player.volume,
  isSeeking: state.player.isSeeking,
  playbackTime: state.player.playbackTime
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent)
